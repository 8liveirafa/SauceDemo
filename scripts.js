import { Builder, By, Key } from "selenium-webdriver";
import { should } from "chai";

should();

// Testes de Login
describe('Testes de Login', async function() {
    const driver = await new Builder().forBrowser('Chrome').build();

    it('Login com credenciais válidas', async function() {
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('standard_user', Key.TAB);
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();
    });

    it('Login com credenciais inválidas', async function() {
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('wrong_standard_user', Key.TAB);
        await driver.findElement(By.id('password')).sendKeys('wrong_secret_sauce');
        await driver.findElement(By.id('login-button')).click();
    });

    it('Login com username inválido', async function() {
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('wrong_standard_user', Key.TAB);
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();
    });

    it('Login com password inválido', async function() {
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('standard_user', Key.TAB);
        await driver.findElement(By.id('password')).sendKeys('wrong_secret_sauce');
        await driver.findElement(By.id('login-button')).click();
    });

    it('Login com credenciais nulas', async function() {
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('login-button')).click();
    });
});




 
       
    

    
    
    
    