import User from '../../models/User';
import Queue from '../../../lib/Queue';
import ConfirmationMail from '../../jobs/ConfirmationMail';
import Notification from '../../schemas/Notification';
import Contact from '../../models/Contact';
import Address from '../../models/Address';
// import CreateAdminService from '../services/CreateAdminService';
import Cache from '../../../lib/Cache';

class UserController {
  async store(req, res) {
    const userEmailExists = await User.findOne({
      where: { email: req.body.email.toLowerCase() },
    });
    if (userEmailExists) {
      return res.status(400).json({ error: 'User already exist email' });
    }
    const userPhoneExists = await User.findOne({
      where: { phone: req.body.phone },
    });
    if (userPhoneExists) {
      return res.status(400).json({ error: 'User already exist phone' });
    }

    const { id, name, email, phone } = await User.create(req.body);
    // notification
    await Notification.create({
      content: `${name}, seu cadastro foi realizado com sucesso`,
      user: id,
    });
    // notification com socket.io
    // const ownerSocket = req.connectedUsers[id];
    // if (ownerSocket) {
    //   req.io.to(ownerSocket).emit('notification', notification);
    // }
    // invalidando cache pois houve modificações
    // await Cache.invalidatePrefix('users:page');
    // await Cache.invalidatePrefix('user:admins:page:');
    await Queue.add(ConfirmationMail.key, { name });
    return res.json({ id, name, email, phone });
  }

  async index(req, res) {
    const userList = await User.findAll({
      attributes: ['id', 'name', 'phone', 'email'],
      include: [
        {
          model: Contact,
          as: 'contacts',
          attributes: ['id', 'name', 'lastname', 'phone', 'email'],
          include: [
            {
              model: Address,
              as: 'address',
              attributes: [
                'number',
                'address',
                'neighborhood',
                'city',
                'state',
                'country',
                'zipcode',
              ],
            },
          ],
        },
      ],
    });

    return res.json(userList);
  }

  async show(req, res) {
    const userEspecified = await User.findByPk(req.userId, {
      attributes: ['id', 'name', 'phone', 'email'],
      include: [
        {
          model: Contact,
          as: 'contacts',
          attributes: ['id', 'name', 'lastname', 'phone', 'email'],
          include: [
            {
              model: Address,
              as: 'address',
              attributes: [
                'number',
                'address',
                'neighborhood',
                'city',
                'state',
                'country',
                'zipcode',
              ],
            },
          ],
        },
      ],
    });
    if (!userEspecified) {
      res.status(400).json({ message: 'usuario não encontrado' });
    }
    return res.json(userEspecified);
  }

  async update(req, res) {
    const user = await User.findByPk(req.userId);
    const emailExist = await User.findOne({
      where: { email: req.body.email.toLowerCase() },
    });
    if (emailExist) {
      return res.status(400).json({ error: 'Email exist try other' });
    }
    const phoneExist = await User.findOne({ where: { phone: req.body.phone } });
    if (phoneExist) {
      return res.status(400).json({ error: 'Telephone exist try other' });
    }
    if (req.body.oldPassword) {
      if (!(await user.checkPassword(req.body.oldPassword))) {
        return res.status(401).json({ error: 'password incorrect' });
      }
    }
    const userModified = await user.update(req.body);
    return res.json(userModified);
  }

  async destroy(req, res) {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(401).json({ error: 'user not exist' });
    }
    await user.destroy();
    return res.json({ message: 'usuario deletado' });
  }
}
export default new UserController();
