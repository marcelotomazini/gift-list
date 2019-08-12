import SearchService from '../services/searchService';
import { LOAD_SEARCH_RESULT, CLEAR_SEARCH_RESULT } from './types';  

export function search(type, text) {
    return dispatch => {
        dispatch({type: CLEAR_SEARCH_RESULT})
        return SearchService.search(type, text)
            .then(response => {
                dispatch({type: LOAD_SEARCH_RESULT, response: response.data});
            })
            .catch(error => {
                dispatch({type: LOAD_SEARCH_RESULT, response: {}});
            })
    };
}