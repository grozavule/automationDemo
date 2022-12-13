const {By} = require("selenium-webdriver");

const addMovie = async (driver, movie) => {
    await driver.findElement(By.xpath('//input')).clear();
    await driver.findElement(By.xpath('//input')).sendKeys(`${movie}`);
    await driver.findElement(By.xpath('//button')).click();
    let movieItem = await driver.findElement(By.xpath(`//ul/li`));
    const displayed = movieItem.isDisplayed();

    expect(displayed).toBeTruthy();
}

const verifyMovie = async (driver, movie) => {
    await driver.findElement(By.xpath('//input')).clear();
    await driver.findElement(By.xpath('//input')).sendKeys(`${movie}`);
    await driver.findElement(By.xpath('//button')).click();

    const movieText = await driver.findElement(By.xpath(`//li/span`)).getText();

    expect(movieText).toBe(movie);
}

module.exports = {
    addMovie,
    verifyMovie
}