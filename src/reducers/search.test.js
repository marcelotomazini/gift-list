import InitialState from './initialState';
import { LOAD_SEARCH_RESULT } from '../actions/types';  
import { search } from './search'

describe('Search reducer',()=>{

  it('should return response', () => {
      expect(search(InitialState.search, {type: LOAD_SEARCH_RESULT, response: true})).toEqual(true);
  });

  it('should return initial state', () => {
    expect(search(InitialState.search, {type: 'XXX', response: true})).toEqual(InitialState.search);
});
});
