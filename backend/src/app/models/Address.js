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
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeCreate', async address => {
      address.number = address.number.toLowerCase();
      address.address = address.address.toLowerCase();
      address.neighborhood = address.neighborhood.toLowerCase();
      address.city = address.city.toLowerCase();
      address.state = address.state.toLowerCase();
      address.country = address.country.toLowerCase();
    });
    return this;
  }
}
export default Address;
