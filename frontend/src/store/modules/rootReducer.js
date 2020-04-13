import { combineReducers } from 'redux';

import users from './users/reducer';
import contacts from './contacts/reducer';
import commons from './common/reducer';

export default combineReducers({
  users,
  contacts,
  commons,
});
