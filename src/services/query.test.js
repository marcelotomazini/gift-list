import Query from './query'

describe('Query',()=>{

    it('should return query url', () => {
        expect(new Query().queryFor('xxx', '/gifts', '1')).toEqual('http://localhost:3001/gifts?text=xxx&page=1');
    });
});
