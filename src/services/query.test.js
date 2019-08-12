import Query from './query'

describe('Query',()=>{

    it('should return query url', () => {
        expect(new Query().queryFor('xxx', '1')).toEqual('https://localhost:8080?page=1');
    });
});
