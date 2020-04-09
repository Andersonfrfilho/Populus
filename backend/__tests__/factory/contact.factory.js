import faker from 'faker';
import { factory } from 'factory-girl';

import User from '../../src/app/models/User';

factory.define('Contact', User, {
  name: faker.name.firstName,
  lastname: faker.name.lastName,
  phone: faker.phone.phoneNumber,
  email: faker.internet.email,
});
export default factory;
