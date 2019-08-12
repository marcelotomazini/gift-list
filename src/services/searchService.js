import axios from 'axios';
import Query from './query';

export default class SearchService {  
    
    static search(type, text) {
        const url = new Query().queryFor(type, text)
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
        return {};
    })

    static getHeaders() {
        return {
            'Content-Type' : 'application/json',
        }
    }
}