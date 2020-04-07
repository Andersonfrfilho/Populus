import Sequelize, { Model } from 'sequelize';

class Contact_Address extends Model {
  static init(sequelize) {
    super.init(
      {
        fk_contacts_id: Sequelize.INTEGER,
        fk_address_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Contact, {
      foreignKey: 'fk_contacts_id',
      as: 'contact_id',
    });
    this.belongsTo(models.Address, {
      foreignKey: 'fk_address_id',
      as: 'address_id',
    });
  }
}
export default Contact_Address;
