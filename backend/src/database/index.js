import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import User from '../app/models/User';
import Address from '../app/models/Address';
import Contact_Address from '../app/models/Contact_Address';
import Contact from '../app/models/Contact';
import databaseConfig from '../config/database';
import File from '../app/models/File';

const models = [User, File, Contact];
class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}
export default new Database();
