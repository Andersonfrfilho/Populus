import produce from 'immer';

const INITIAL_STATE = {
  email: '',
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@users/DEFINE_EMAIL':
      return produce(state, draft => {
        draft.email = action.payload.email;
      });
    default:
      return state;
  }
}
