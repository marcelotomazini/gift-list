import InitialState from './initialState';
import { LOAD_SEARCH_RESULT, CLEAR_SEARCH_RESULT } from '../actions/types';  

export function search(state = InitialState.search, action) {  
  switch(action.type) {
    case LOAD_SEARCH_RESULT:
      return action.response
      case CLEAR_SEARCH_RESULT:
        return InitialState.search
    default: 
      return state;
  }
}
