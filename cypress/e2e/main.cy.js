import mainPage from "../pageObjects/mainPage"

describe('template spec', () => {
    it ('main dashboard', () => {
        cy.visit('https://dashboard.melaka.app/register')
        cy.wait(2000)
        // Fill the Name
        mainPage.fillName().type('Irene Jasmine');

        // Fill the Phone Number
        mainPage.fillPhoneNumber().type('82134345667');

        // Fill the Business Name
        mainPage.fillBusinessName().type('Warung Madura');

        // Fill Email
        mainPage.fillEmail().type('testemail@gmail.com');

        // Password and Confirm Password
        mainPage.fillPassword().type('Password1');
        mainPage.fillConfirmPassword().type('Password1');

        // Final Step
        mainPage.checkedList().click();
        mainPage.btnContinue().click();
    })
})