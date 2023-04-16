import { combineReducers } from 'redux';

const INITIAL_STATE = {
  chave: '',
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  reducerData: searchReducer,
});
export default rootReducer;
