import { Router } from 'express';
import Brute from 'express-brute';
import BruteRedis from 'express-brute-redis';
import UserController from './app/controllers/users/UserController';
import ContactController from './app/controllers/users/ContactController';
import SessionController from './app/controllers/users/SessionController';
import authMiddleware from './app/middlewares/auth';
import { multerUploads } from './app/middlewares/multer';
import FileController from './app/controllers/FileController';
import { cloudinaryConfig } from './config/cloudinaryConfig';
import NotificationController from './app/controllers/NotificationController';
// validates
// validates : Users
import validateUserStore from './app/validators/users/UserStore';
import validateUserUpdate from './app/validators/users/UserUpdate';
// validates : Session
import validateSessionStore from './app/validators/users/SessionStore';
// validates : Users : Contact : Address
import validateContactAddressStore from './app/validators/address-contacts/AddressContactStore';

const routes = new Router();
const bruteStore = new BruteRedis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});
const bruteForce = new Brute(bruteStore);

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
routes.put('/users', authMiddleware, validateUserUpdate, UserController.update);
// routes : contacts
routes.post(
  '/users/content/contacts',
  authMiddleware,
  validateContactAddressStore,
  ContactController.store
);
routes.get(
  '/users/content/contacts/:id',
  authMiddleware,
  ContactController.update
);
routes.get(
  '/users/content/contacts/:id',
  authMiddleware,
  ContactController.destroy
);
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);
routes.use('*', cloudinaryConfig);
routes.post('/uploads', multerUploads, FileController.store);
export default routes;
