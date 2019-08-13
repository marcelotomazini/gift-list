import MockServer from "../utils/MockServer";
import BrowserHandler from "../utils/BrowserHandler";

const mockServer = new MockServer()
const browserHandler = new BrowserHandler();

beforeAll(async () => {
    mockServer.onGet('/gifts?text=x&page=1', gifts)
    mockServer.onGet('/gifts/size?text=x', 2)
    mockServer.start()
    await browserHandler.open()
})

afterAll(async () => {
    mockServer.stop()
    await browserHandler.close()
})

describe('Gift List',()=>{

    it('should load gifts', async () => {

        const page = await browserHandler.newPage();
        
        await page.type('#txtSearch', 'x')
        await page.click('#btnSearch');

        expect(await getInnerText(page, '.MuiGrid-root')).toEqual('odit\n\n'
            + 'Tempore ad molestiae. Sit reprehenderit sunt. Perferendis sed quidem.\n\n'
            + 'adipisci\n\n'
            + 'Rerum eius unde. Quia error delectus. Tenetur vero rem.')
        expect(await getInnerText(page, '.MuiButtonBase-root')).toEqual('SEARCH')
    }, 16000);

});

function getInnerText(page, toSelect) {
    return page.evaluate(function(item) {
        const selectedItem = document.querySelector(item)
        return selectedItem ? selectedItem.innerText : undefined
    }, toSelect)
}

const gifts = [
    {"id":41,"title":"odit","text":"Tempore ad molestiae. Sit reprehenderit sunt. Perferendis sed quidem."},
    {"id":40,"title":"adipisci","text":"Rerum eius unde. Quia error delectus. Tenetur vero rem."}
]