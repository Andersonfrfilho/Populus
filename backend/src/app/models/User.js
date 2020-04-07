import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        phone: Sequelize.STRING,
        email: Sequelize.STRING,
        // nunca vai existir na base de dados
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        avatar_id: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    // aqui utilizamos um hooks que após salvar execute essa funcao
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    this.addHook('beforeCreate', async user => {
      user.name = user.name.toLowerCase();
      user.phone = user.phone.toLowerCase();
      user.email = user.email.toLowerCase();
      user.type = user.type.toLowerCase();
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
export default User;
