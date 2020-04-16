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
      fk_contact_id,
    } = req.body;
    const newAddress = {
      address,
      number,
      neighborhood,
      city,
      country,
      state,
      zipcode,
      fk_contact_id,
    };
    const contactExist = await Contact.findByPk(fk_contact_id);
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
    const { idAddress } = req.query;
    const showAddresses = await Address.findByPk(idAddress, {
      attributes: [
        'id',
        'number',
        'address',
        'neighborhood',
        'city',
        'state',
        'country',
        'zipcode',
      ],
    });
    if (!showAddresses) {
      return res.status(400).json({ error: 'Address not find' });
    }
    return res.json(showAddresses);
  }

  async update(req, res) {
    const { id } = req.params;
    const address = await Address.findByPk(id);
    if (!address) {
      return res.status(400).json({ error: 'Address not exist' });
    }
    const addressModified = await address.update(req.body);
    return res.json(addressModified);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const address = await Address.findByPk(id);
    if (!address) {
      return res.status(400).json({ error: 'Contact not exist' });
    }
    const addressDelete = await address.destroy();
    return res.json(addressDelete);
  }
}
export default new AddressController();
