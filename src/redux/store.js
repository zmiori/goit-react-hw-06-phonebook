import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import itemsReduser from './items/items-reducer';
import filterReduser from './filter/filter-reducer';

const persistConfig = {
  key: 'phonebook',
  storage,
};

const contactsReduser = combineReducers({
  items: itemsReduser,
  filter: filterReduser,
});

const rootReducer = combineReducers({
  contacts: contactsReduser,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export default { store, persistor };
