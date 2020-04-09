import Contact from '../models/Contact';
import Address from '../models/Address';

class AddressController {
  async store(req, res) {
    const {
      address,
      number,
      neighborhood,
      city,
      country,
      state,
      zipcode,
      contact_id,
    } = req.body;
    const newAddress = {
      address,
      number,
      neighborhood,
      city,
      country,
      state,
      zipcode,
      fk_contact_id: contact_id,
    };
    const contactExist = await Contact.findByPk(contact_id);
    if (!contactExist) {
      return res.status(400).json({ error: 'Contact not find' });
    }
    const { id: idAddress } = await Address.create(newAddress);
    return res.json({
      id: idAddress,
      ...newAddress,
    });
  }

  async show(req, res) {
    const {
      page = 1,
      pageSize = 10,
      order = ['name'],
      idAddress,
      idContact,
    } = req.query;
    const listAddresses = await Address.findOne(idAddress, {
      limit: pageSize,
      offset: (page - 1) * pageSize,
      attributes: [
        'number',
        'address',
        'neighborhood',
        'city',
        'state',
        'country',
        'zipcode',
      ],
      order,
      where: { fk_contact_id: idContact },
    });
    if (!listAddresses) {
      return res.status(400).json({ error: 'Address not find' });
    }
    return res.json(listAddresses);
  }

  async update(req, res) {
    const { id_address } = req.query;
    const address = await Address.findByPk(id_address);
    if (!address) {
      return res.status(400).json({ error: 'Address not exist' });
    }
    const addressModified = await address.update(req.body);
    return res.json(addressModified);
  }

  async destroy(req, res) {
    const { id_address } = req.query;
    const address = await Contact.findByPk(id_address);
    if (!address) {
      return res.status(400).json({ error: 'Contact not exist' });
    }
    const addressDelete = await address.destroy();
    return res.json(addressDelete);
  }
}
export default new AddressController();
