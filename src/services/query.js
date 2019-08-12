export default class Query {  
    
    queryFor = (text, endpoint, page) => {
        return this.url() + endpoint + '?text=' + text + '&page=' + page;
    }

    url = () => {
        return 'http://localhost:8080'
    }
}