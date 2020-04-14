import Phone from '../models/Phone';
import Contact from '../models/Contact';
class AddressController {
  async store(req, res) {
    const {
      number,
      description,
      fk_contact_id,
    } = req.body;
    const newPhone = {
      number,
      description,
      fk_contact_id,
    }
    const contactExist = await Contact.findByPk(fk_contact_id);
    if (!contactExist) {
      return res.status(400).json({ error: 'Contact not find' });
    }
    const { id: idPhone } = await Phone.create({number:'123456788997',description:'uhul',fk_contact_id:2});
    return res.json({
      id: idPhone,
      ...newPhone
    });
  }
  async show(req, res) {
    const {
    idAddress
    } = req.query;
    const Address = await Address.findByPk(idAddress, {
      attributes: [
        'id',
        'description',
        'number',
      ],
    });
    if (!Address) {
      return res.status(400).json({ error: 'Address not find' });
    }
    return res.json(Address);
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
