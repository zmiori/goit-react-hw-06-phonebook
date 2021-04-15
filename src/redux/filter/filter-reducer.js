import CHANGE_FILTER from './filter-types';

const filterReduser = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default filterReduser;
