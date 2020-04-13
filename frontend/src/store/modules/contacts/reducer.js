import produce from 'immer';

const INITIAL_STATE = {
  name: '',
  contacts: [],
  names: [],
};

export default function contacts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@contacts/DEFINE_INFORMATION_USER':
      return produce(state, draft => {
        draft.name = action.payload.name;
        draft.contacts = action.payload.contacts;
        draft.names = action.payload.names;
      });

    default:
      return state;
  }
}
