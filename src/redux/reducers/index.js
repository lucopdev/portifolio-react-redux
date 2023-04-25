import { combineReducers } from 'redux';
import { MAKE_REF } from '../types/types';

const INITIAL_STATE = {
  ref: {},
};

const mainReference = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case MAKE_REF:
    return {
      ...state,
      ref: action.payload.ref,
    };
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  mainReference,
});
export default rootReducer;
