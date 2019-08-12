export default class Query {  
    
    queryFor = (text, page) => {
        return this.endpoint() + '/gift_lists?page=' + page;
    }

    endpoint = () => {
        return 'http://localhost:8080'
    }
}