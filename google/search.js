// Here we need to import By, which will allow us to use either css or xpath selectors in our code
const { By } = require('selenium-webdriver')

const search = async (driver, searchTerm) => {

    // We are starting with an await since we're dealing with promises and the browser
    // We have our automation find the element which we can then use the sendKeys method to type
    // into that element, and the \n to hit enter after typing the search term
    await driver.findElement(By.name('q')).sendKeys(`${searchTerm}\n`)

    // We are then setting a variable to be the text from the results of our Google search
    // Instead of using the sendKeys method, we are using the getText method which will return 
    // the text in that element as a string
    let resultsText = await driver.findElement(By.id('res')).getText()

    // We make our restults lower case and then expect it to contain our original search term
    expect(resultsText.toLowerCase()).toContain(searchTerm.toLowerCase())
}
const search2 = async (driver, searchTerm) => {
    //this will find and clear the search bar
    await driver.findElement(By.name('q')).clear()

    //then do the search,sendkeys will input our searchTerm for us in the search bar
    await driver.findElement(By.name('q')).sendKeys(`${searchTerm}\n`)

    await driver.findElement(By.xpath('//a[text()="Images"][1]')).click()

    let resultsText = await driver.findElement(By.xpath('//h3[contains(text(),"Cute Puppy")]')).getText()

    expect(resultsText.toLowerCase()).toContain('cute puppy')
}

module.exports = {
    search,
    search2
}