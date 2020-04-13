import produce from 'immer';

const INITIAL_STATE = {
  name: '',
  contacts: [
    {
      options: [
        {
          name: 'Nome',
          type: 'alpha',
          select: false,
          length: 3,
          align: 'flex-start',
        },
      ],
    },
  ],
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
