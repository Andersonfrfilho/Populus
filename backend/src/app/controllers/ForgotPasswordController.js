import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';
import Queue from '../../lib/Queue';
import RedefinePasswordMail from '../jobs/RedefinePasswordMail';

class ForgotPasswordController {
  async store(req, res) {
    const { email } = req.body;
    const user = await User.findOne({ where: { email: email.toLowerCase() } });
    if (!user) {
      return res.status(400).json({ error: 'email invalido' });
    }
    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: authConfig.expiresInUpdetPassword,
    });
    await Queue.add(RedefinePasswordMail.key, {
      name: user.name,
      email,
      token,
    });
    return res.json({
      name: user.name,
      email,
      token,
    });
  }

  async update(req, res) {
    const user = await User.findByPk(req.userId);
    const { newPassword } = req.body;
    if (!user) {
      return res.status(400).json({ error: 'usuario não encontrado' });
    }
    await user.update({
      password: newPassword,
    });

    return res.json({ message: 'senha alterada com sucesso' });
  }
}
export default new ForgotPasswordController();
