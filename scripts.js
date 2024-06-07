import {Builder , By, Key} from "selenium-webdriver"
import {should} from "chai";
should()
 
// Testes de Login
describe ('Testes de Login', async function() {
    it ('Login com credeciais válidas', async function() {
        // Abrir o Navegador
        let driver = await new Builder().forBrowser('Chrome').build()

        //Navegar até o site
        await driver.get('https://www.saucedemo.com/')

        //Inserir Username Válido
        await driver.findElement(By.id('//*[@id="user-name"]')).sendKeys('standard_user', Key.TAB)

        //Inserir Password Válida
        await driver.findElement(By.id('//*[@id="password"]')).sendKeys('secret_sauce')

        //Clicando no botão Login
        await driver.findElement(By.id('//*[@id="login-button"]')).click('//*[@id="login-button"]')
    })
})   
        





 
       
    

    
    
    
    