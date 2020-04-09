import faker from 'faker';
import { factory } from 'factory-girl';

import User from '../../src/app/models/User';

factory.define('Address', User, {
  address: faker.address.streetName,
  number: faker.address.streetAddress,
  neighborhood: faker.address.secondaryAddress,
  city: faker.address.city,
  country: faker.address.country,
  state: faker.address.state,
  zipcode: faker.address.zipCode,
});
export default factory;
