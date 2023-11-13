// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('login-user-email-ci-dont-exits', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('login-user-email-ci-dont-exits', async function() {
    await driver.get("http://localhost:1111/")
    await driver.manage().window().setRect({ width: 1366, height: 736 })
    await driver.findElement(By.css(".ml-3 > .btn")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("password")).sendKeys("tps-pwd07*")
    await driver.findElement(By.id("customerloginForm")).click()
    await driver.findElement(By.id("customerloginForm")).click()
    assert(await driver.findElement(By.id("notify_message")).getText() == "A customer with that email does not exist.")
    await driver.sleep(5000);
  })
})


describe('login-user-email-ci-empty', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('login-user-email-ci-empty', async function() {
    await driver.get("http://localhost:1111/")
    await driver.manage().window().setRect({ width: 1366, height: 736 })
    await driver.findElement(By.css(".ml-3 > .btn")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("password")).sendKeys("tps-pwd07*")
    await driver.findElement(By.id("customerloginForm")).click()
    await driver.findElement(By.id("customerloginForm")).click()
    assert(await driver.findElement(By.id("notify_message")).getText() == "The e-mail field must not be empty")
    await driver.sleep(5000);
  })
})


describe('login-user-email-cv', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('login-user-email-cv', async function() {
    await driver.get("http://localhost:1111/")
    await driver.manage().window().setRect({ width: 1366, height: 736 })
    await driver.findElement(By.css(".ml-3 > .btn")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("fnarvaez@correo.com")
    await driver.findElement(By.id("password")).sendKeys("tps-pwd07*")
    await driver.findElement(By.id("customerloginForm")).click()

    const customerSaveButton = await driver.wait(until.elementLocated(By.id('customerSave')), 10000);
    await customerSaveButton.click();

    const elements = await driver.findElements(By.css(".customer-details-login"));
    assert(elements.length > 0);
    await driver.sleep(5000);
  })
})
