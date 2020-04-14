import { Router } from 'express';
// import Brute from 'express-brute';
// import BruteRedis from 'express-brute-redis';
import UserController from './app/controllers/users/UserController';
import ForgotPasswordController from './app/controllers/ForgotPasswordController';
import ContactController from './app/controllers/users/ContactController';
import AddressController from './app/controllers/AddressController';
import SessionController from './app/controllers/users/SessionController';
import PhoneController from './app/controllers/PhoneController';
import authMiddleware from './app/middlewares/auth';
import { cloudinaryConfig } from './config/cloudinaryConfig';
import NotificationController from './app/controllers/NotificationController';
// validates
// validates : Users
import validateRedefinedPasswordStore from './app/validators/users/RedefinedPasswordStore';
import validateRedefinedPasswordUpdate from './app/validators/users/RedefinedPasswordUpdate';
import validateUserStore from './app/validators/users/UserStore';
import validateUserUpdate from './app/validators/users/UserUpdate';
// validates : Session
import validateSessionStore from './app/validators/users/SessionStore';
import validateContactStore from './app/validators/users/ContactStore';
import validateContactUpdate from './app/validators/users/ContactUpdate';
// validates : Users : Contact : Address
import validateAddressStore from './app/validators/addresses/AddressesStore';
import validateAddressUpdate from './app/validators/addresses/AddressesUpdate';
// validates : Users : Contact : Phone
import validatePhoneStore from './app/validators/phones/PhonesStore';
import validatePhoneUpdate from './app/validators/phones/PhonesUpdate';
const routes = new Router();
// const bruteStore = new BruteRedis({
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
// });
// const bruteForce = new Brute(bruteStore);

routes.post('/users', validateUserStore, UserController.store);
routes.post(
  '/sessions',
  // bruteForce.prevent,
  validateSessionStore,
  SessionController.store
);
// routes : users
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/user', authMiddleware, UserController.show);
routes.post(
  '/user/forgotPassword',
  validateRedefinedPasswordStore,
  ForgotPasswordController.store
);
routes.put(
  '/user/forgotPassword',
  authMiddleware,
  validateRedefinedPasswordUpdate,
  ForgotPasswordController.update
);
routes.put('/users', authMiddleware, validateUserUpdate, UserController.update);
// routes : contacts
routes.post(
  '/users/content/contacts',
  authMiddleware,
  validateContactStore,
  ContactController.store
);
routes.get(
  '/users/content/contacts/:id',
  authMiddleware,
  ContactController.update
);
routes.delete(
  '/users/content/contacts/:id',
  authMiddleware,
  ContactController.destroy
);
// routes : contacts :address
routes.post(
  '/users/content/contacts/content/addresses',
  validateAddressStore,
  AddressController.store
);
routes.get(
  '/users/content/contacts/content/addresses/:idAddress',
  AddressController.show
);
routes.put(
  '/users/content/contacts/content/addresses/:id_address',
  validateAddressUpdate,
  AddressController.update
);
routes.delete(
  '/users/content/contacts/content/addresses/:id_address',
  AddressController.destroy
);
// routes : contacts : phone
routes.post(
  '/users/content/contacts/content/phone',
  validatePhoneStore,
  PhoneController.store
);
routes.get(
  '/users/content/contacts/content/phone/:idPhone',
  PhoneController.show
);
routes.put(
  '/users/content/contacts/content/phone/:id_phone',
  validatePhoneUpdate,
  PhoneController.update
);
routes.delete(
  '/users/content/contacts/content/phone/:id_phone',
  PhoneController.destroy
);
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);
routes.use('*', cloudinaryConfig);
export default routes;
