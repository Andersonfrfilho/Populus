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
  addressName: '',
  neighborhood: '',
  city: '',
  state: '',
  index: null,
  loadingLocal: false,
  modalState: true,
};

export default function contacts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@contacts/DEFINE_INFORMATION_USER':
      return produce(state, draft => {
        draft.name = action.payload.name;
        draft.contacts = action.payload.contacts;
        draft.names = action.payload.names;
      });
    case '@contacts/DEFINE_ADDRESS':
      return produce(state, draft => {
        draft.addressName = action.payload.addressName;
        draft.neighborhood = action.payload.neighborhood;
        draft.city = action.payload.city;
        draft.state = action.payload.state;
        draft.index = action.payload.index;
        draft.loadingLocal = action.payload.loadingLocalParam;
      });
    case '@contacts/DEFINE_LOCAL':
      return produce(state, draft => {
        draft.loadingLocal = action.payload.loadingLocalParam;
      });
    case '@contacts/CLOSED_MODAL':
      return produce(state, draft => {
        draft.modalState = action.payload.modalState;
      });
    default:
      return state;
  }
}
