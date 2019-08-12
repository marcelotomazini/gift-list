import MockServer from './MockServer'
import { RESPONSES } from './FunctionalMockResponses'
import { API_MAP } from 'utils'

export class BackendHandler {

    constructor() {
        this.server = new MockServer();
    }

    configureAndStart = () => {
        this.configureMocks()
        this.start()
    }

    configureMocks = () => {
        this.setupLogin()
        this.server.onGet(API_MAP.getAllSubscriptions, RESPONSES.subscriptions)
        this.server.onGet(API_MAP.getSubscriptionsFilter, RESPONSES.subscriptionsFilter)
        this.server.onGet(API_MAP.getSubscriptionById.replace('{}', '123'), RESPONSES.subscription)
        this.server.onGet(API_MAP.getInvoice.replace('{}', '275'), RESPONSES.invoice)
        this.server.onGet(API_MAP.getInvoice.replace('{}', '121'), RESPONSES.invoice2)
    }

    stop = () => {
        this.server.stop()
    }

    getServer() {
        return this.server
    }

    start = () => {
        this.server.start()
    }

    setupLogin = () => {
        this.server.addMock('/api/login', 'POST', RESPONSES.loginSuccessfull)
    }

    addMock = (path, method, responseBody) => {
        this.server.addMock(path, method, responseBody)
    }

    onGet = (path, responseBody) => {
        this.server.onGet(path, responseBody)
    }

    onPost = (path, responseBody) => {
        this.server.onPost(path, responseBody)
    }

    addChecker = (path, method, requestChecker) => {
        this.server.addChecker(path, method, requestChecker)
    }

    verify = () => {
        this.server.verify()
    }

    hasCalled = (url, times = 1) => {
        this.server.hasCalled(url, times)
    }
}

export default BackendHandler