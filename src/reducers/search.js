import InitialState from './initialState';
import { LOAD_SEARCH_RESULT, CLEAR_SEARCH_RESULT, SAVE_SEARCH_TEXT, SAVE_SEARCH_SIZE } from '../actions/types';  

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

export function saveSearchText(state = InitialState.text, action) {  
  switch(action.type) {
    case SAVE_SEARCH_TEXT:
      return action.text
    default: 
      return state;
  }
}

export function saveSearchSize(state = InitialState.searchSize, action) {  
  switch(action.type) {
    case SAVE_SEARCH_SIZE:
      return action.size
    default: 
      return state;
  }
}