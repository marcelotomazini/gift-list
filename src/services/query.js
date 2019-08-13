export default class Query {  
    
    queryFor = (text, endpoint, page) => {
        return this.url() + endpoint + '?text=' + encodeURIComponent(text) + '&page=' + page;
    }

    count = (text, endpoint) => {
        return this.url() + endpoint + '/size?text=' + encodeURIComponent(text);
    }

    url = () => {
        return 'http://localhost:3001'
    }
}