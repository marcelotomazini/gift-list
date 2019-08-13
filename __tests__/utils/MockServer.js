import * as url from 'url'
import * as http from 'http'

class MockServer {  

    constructor(){
        this._mocks = [];
    }

    onGet(path, responseBody) {
        this.addMock(path, 'GET', responseBody)
    }

    addMock(path, method, responseBody) {
        this._mocks[[path, method]] = responseBody
    }

    clear() {
        this._mocks = []
        this._requests = []
    }

    start(port = 3001) {
        this._server = http.createServer((req, res) => {
            const mocks = this._mocks;
            const mock = mocks[[req.url, req.method]]
            
            if(mock || req.method === 'OPTIONS') {
                res.setHeader('content-type', 'application/json')
                res.setHeader('Access-Control-Allow-Origin', '*')
                res.setHeader('Access-Control-Request-Method', '*')
                res.setHeader('Access-Control-Allow-Methods', '*')
                
                const requestHeaders = req.headers['access-control-request-headers']
                if(requestHeaders) {
                    res.setHeader('Access-Control-Allow-Headers', requestHeaders)
                }

                if(mock){
                    res.write(JSON.stringify(mock))
                }

                res.end()
            }
        }).listen(port)
    }

    stop() {
        this.clear()
        if(this._server)
            this._server.close()
    }

    _resolvePathName(path) {
        return url.parse(path, true).pathname
    }
}


export default MockServer;