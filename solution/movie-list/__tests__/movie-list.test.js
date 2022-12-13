const { Builder, Capabilities } = require("selenium-webdriver")
const { addMovie } = require('../functions/addMovie')
const { verifyMovie } = require('../functions/verifyMovie')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll (async () => {
    await driver.get('http://127.0.0.1:5500/movie-list/index.html')
})

afterAll (async () => {
    await driver.quit()
})

test('Add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(5000)
})

test('Displayed movie matches entered movie', async () => {
    await verifyMovie(driver)
    await driver.sleep(5000)
})