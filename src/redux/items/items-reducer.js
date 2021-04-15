import actionTypes from './items-types';

const itemsReduser = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT:
      if (state.find(contact => contact.name === payload.name)) {
        alert(`${payload.name} is already in contacts`);
        return state;
      } else return [payload, ...state];

    case actionTypes.DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
};

export default itemsReduser;
