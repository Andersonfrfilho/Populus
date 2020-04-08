import Sequelize, { Model } from 'sequelize';

class Contact extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        lastname: Sequelize.STRING,
        phone: Sequelize.STRING,
        email: Sequelize.STRING,
        fk_user_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeCreate', async contact => {
      contact.name = contact.name.toLowerCase();
      contact.lastname = contact.lastname.toLowerCase();
      contact.phone = contact.phone.toLowerCase();
      contact.email = contact.email.toLowerCase();
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Address, {
      foreignKey: 'fk_contact_id',
      as: 'address',
    });
    this.belongsTo(models.User, { foreignKey: 'fk_user_id', as: 'user_id' });
  }
}
export default Contact;
