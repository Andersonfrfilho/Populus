import Sequelize, { Model } from 'sequelize';

class Phone extends Model {
  static init(sequelize) {
    super.init(
      {
        number: Sequelize.STRING,
        description: Sequelize.STRING,
        fk_contact_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Contact, {
      foreignKey: 'fk_contact_id',
      as: 'contact_id',
    });
  }
}
export default Phone;
