import SearchService from '../services/searchService';
import { LOAD_SEARCH_RESULT, CLEAR_SEARCH_RESULT, SAVE_SEARCH_TEXT, SAVE_SEARCH_SIZE } from './types';  

export function searchGifts(text, page = 1) {
    return dispatch => {
        dispatch({type: CLEAR_SEARCH_RESULT})
        dispatch({type: SAVE_SEARCH_TEXT, text: text})

        SearchService.getSearchSize(text).then(response => {
            dispatch({type: SAVE_SEARCH_SIZE, size: response.data});
        })
        
        return SearchService.searchGifts(text, page)
        .then(response => {
                dispatch({type: LOAD_SEARCH_RESULT, response: response.data});
            })
            .catch(error => {
                dispatch({type: LOAD_SEARCH_RESULT, response: []});
            })
    };
}