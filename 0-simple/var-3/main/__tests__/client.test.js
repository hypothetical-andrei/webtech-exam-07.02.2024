const puppeteer = require('puppeteer')

let browser
let page

process.on('uncaughtException', e => console.warn(e.stack))

describe('local', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: 'new',
      ignoreDefaultArgs: ['--disable-extensions'],
    })
    page = await browser.newPage()
  })

  it('sort ascending button exists on page and is clickable', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#sortAscBtn')
    await page.click('#sortAscBtn')
  })

  it('sort descending button exists on page and is clickable', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#sortDescBtn')
    await page.click('#sortDescBtn')
  })

  it('ascending sort works', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#sortAscBtn')
    await page.click('#sortAscBtn')
    await page.waitForNetworkIdle()    
    const first = await page.$eval("#main div:first-child", e => e.textContent)
    expect(first.trim()).toBe('ann accountant')
  })

  it('descending sort works', async () => {
    await page.goto('http://localhost:8080')
    await page.waitForSelector('#sortDescBtn')
    await page.click('#sortDescBtn')
    await page.waitForNetworkIdle()
    const first = await page.$eval("#main div:first-child", e => e.textContent)
    expect(first.trim()).toBe('tim accountant')
  })

  afterAll(async () => {
    await page.close()
    await browser.close()
  })
})