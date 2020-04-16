import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        number: Sequelize.STRING,
        address: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        country: Sequelize.STRING,
        zipcode: Sequelize.STRING,
        fk_contact_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    // this.addHook('beforeCreate', async address => {
    //   address.address = address.address.toLowerCase();
    //   address.neighborhood = address.neighborhood.toLowerCase();
    //   address.city = address.city.toLowerCase();
    //   address.state = address.state.toLowerCase();
    //   address.country = address.country.toLowerCase();
    // });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Contact, {
      foreignKey: 'fk_contact_id',
      as: 'contact_id',
    });
  }
}
export default Address;
