import puppeteer from 'puppeteer'

const baseAppUrl = 'http://localhost:3000'
const viewport = {width: 1500, height: 900}

export class BrowserHandler {

    async open() {
        this._browser = await puppeteer.launch({
            executablePath: process.env.CHROME_BIN || null,
            headless: true,
            slowMo: 20,
            args: ['--no-sandbox', '--window-size=1920,1080']
        });
    }

    async close() {
        await this.browser().close()
    }

    async closePage(page) {
        await page.close()
    }

    async newBlankPage() {
        const page = await this.browser().newPage();
        await page.setViewport(viewport);
        return page;
    }

    async newPage() {
        const page = await this.newBlankPage();
        await page.goto(baseAppUrl);
        return page;
    }

    browser() {
        return this._browser;
    }
}

export default BrowserHandler