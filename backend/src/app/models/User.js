import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        phone: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    this.addHook('beforeCreate', async user => {
      user.name = user.name.toLowerCase();
      user.phone = user.phone.toLowerCase();
      user.email = user.email.toLowerCase();
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Contact, { foreignKey: 'fk_user_id', as: 'contacts' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
export default User;
