import Sequelize, { Model } from 'sequelize';

class Contact extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        lastname: Sequelize.STRING,
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
      contact.email = contact.email.toLowerCase();
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Address, {
      foreignKey: 'fk_contact_id',
      as: 'addresses',
    });
    this.hasMany(models.Phone, {
      foreignKey: 'fk_contact_id',
      as: 'phones',
    });
    this.belongsTo(models.User, { foreignKey: 'fk_user_id', as: 'user_id' });
  }
}
export default Contact;
