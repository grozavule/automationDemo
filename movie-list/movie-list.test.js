const { Builder, Capabilities } = require("selenium-webdriver");


require("chromedriver");

let {addMovie, verifyMovie} = require('./addMovie');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
    await driver.get("file:///Users/eric.drake/Documents/DevMountain/Foundations/week-6/tuesday/automation-demo/movie-list/index.html");
});
describe('movie list tests', () => {
    test('Tests Add movie capabiliy', async () => {
        await addMovie(driver, 'War of the Worlds');
        await driver.sleep(5000);
    });

    test('Verify the correct movie was added', async () => {
        await verifyMovie(driver, `Bill and Ted's Bogus Journey`);
        await driver.sleep(5000);
    })
});

afterAll(async () => {
    await driver.quit();
});