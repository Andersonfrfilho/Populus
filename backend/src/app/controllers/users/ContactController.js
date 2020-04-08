import Contact from '../../models/Contact';
import Address from '../../models/Address';

class ContactController {
  async store(req, res) {
    const { name, lastname, phone, email } = req.body;
    const newContact = {
      name,
      lastname,
      phone,
      email,
      fk_user_id: req.userId,
    };
    const emailExist = await Contact.findOne({ where: { email } });
    if (emailExist) {
      return res.status(400).json({ error: 'email ja cadastrado' });
    }
    const { id: idContact } = await Contact.create(newContact);
    return res.json({
      contact: {
        id: idContact,
        ...newContact,
      },
    });
  }

  async show(req, res) {
    const { page = 1, pageSize = 10, order = ['name'], idContact } = req.query;
    const listContacts = await Contact.findOne(idContact, {
      limit: pageSize,
      offset: (page - 1) * pageSize,
      attributes: ['id', 'name', 'lastname', 'phone', 'email'],
      order,
      where: { fk_user_id: req.userId },
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
    });
    if (!listContacts) {
      return res.status(400).json({ error: 'Contacts not find' });
    }
    return res.json(listContacts);
  }

  async update(req, res) {
    const { id_contact } = req.query;
    const { email } = req.body;
    const contact = await Contact.findByPk(id_contact);
    if (!contact) {
      return res.status(400).json({ error: 'Contact not exist' });
    }
    if (!(contact.fk_user_id === req.userId)) {
      return res
        .status(401)
        .json({ error: 'User not authorizate to update contact' });
    }
    const emailExist = await Contact.findOne({
      where: { email: email.toLowerCase() },
    });
    if (emailExist) {
      return res.status(400).json({ error: 'Email exist try other' });
    }

    const contactModified = await contact.update(req.body);
    return res.json(contactModified);
  }

  async destroy(req, res) {
    const { id_contact } = req.query;
    const contact = await Contact.findByPk(id_contact);
    if (!contact) {
      return res.status(400).json({ error: 'Contact not exist' });
    }
    if (!(contact.fk_user_id === req.userId)) {
      return res
        .status(401)
        .json({ error: 'User not authorizate to update contact' });
    }
    const contactModified = await contact.delete();
    return res.json(contactModified);
  }
}
export default new ContactController();
