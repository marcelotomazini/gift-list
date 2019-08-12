import axios from 'axios';
import Query from './query';

export default class SearchService {  
    
    static searchGifts(text, page = 0) {
        const url = new Query().queryFor(text, '/gifts', page)
        return this.get(url);
    }

    static calculateSearchSize(text) {
        const url = new Query().queryFor(text, '/gifts/size')
        return this.get(url);
    }

    static get = url => axios(
        {
            method: 'get',
            url: url,
            headers: this.getHeaders(),
        }
    ).then(response => {
        return response;
    }).catch(error => {
        return [];
    })

    static getHeaders() {
        return {
            'Content-Type' : 'application/json',
        }
    }
}