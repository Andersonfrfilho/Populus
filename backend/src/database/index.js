import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import User from '../app/models/User';
import Contact from '../app/models/Contact';
import Address from '../app/models/Address';
import Phone from '../app/models/Phone';
import databaseConfig from '../config/database';

const models = [User, Contact, Phone, Address];
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
