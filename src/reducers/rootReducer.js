import { combineReducers } from 'redux';
import { search, saveSearchText as text, saveSearchSize as searchSize } from './search';

export default combineReducers({
    search,
    text,
    searchSize
})