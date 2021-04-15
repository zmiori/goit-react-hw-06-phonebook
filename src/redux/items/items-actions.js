import { v4 as uuidv4 } from 'uuid';
import actionTypes from './items-types';

export const addContact = ({ name = '', number = '' }) => ({
  type: actionTypes.ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = ({ id, name, number }) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: {
    id,
    name,
    number,
  },
});
