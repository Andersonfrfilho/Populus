import Phone from '../models/Phone';
import Contact from '../models/Contact';
import Address from '../models/Address';

class AddressController {
  async store(req, res) {
    const { number, description, fk_contact_id } = req.body;
    const newPhone = {
      number,
      description,
      fk_contact_id,
    };
    const contactExist = await Contact.findByPk(fk_contact_id);
    if (!contactExist) {
      return res.status(400).json({ error: 'Contact not find' });
    }
    const response = await Phone.create(newPhone);
    return res.json(response);
  }

  async show(req, res) {
    const { idPhone } = req.query;
    const phone = await Phone.findByPk(idPhone, {
      attributes: ['id', 'description', 'number'],
    });
    if (!phone) {
      return res.status(400).json({ error: 'Phone not find' });
    }
    return res.json(phone);
  }

  async update(req, res) {
    const { id_phone } = req.query;
    const phone = await Phone.findByPk(id_phone);
    if (!phone) {
      return res.status(400).json({ error: 'Phone not exist' });
    }
    const phoneModified = await phone.update(req.body);
    return res.json(phoneModified);
  }

  async destroy(req, res) {
    const { id_phone } = req.query;
    const phone = await Phone.findByPk(id_phone);
    if (!phone) {
      return res.status(400).json({ error: 'Phone not exist' });
    }
    const phoneDelete = await phone.destroy();
    return res.json(phoneDelete);
  }
}
export default new AddressController();
