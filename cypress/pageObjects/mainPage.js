class mainPage {
    fillName(){
        return cy.get('input[id="input-:R36l6:"]')
    }
    fillPhoneNumber(){
        return cy.get('input[id="input-:R156l6:"]')
    }
    fillBusinessName(){
        return cy.get('input[id="input-:R76l6:"]')
    }
    fillEmail(){
        return cy.get('input[id="input-:Rb6l6:"]')
    }
    fillPassword(){
        return cy.get('input[id="input-:Rd6l6:"]')
    }
    fillConfirmPassword(){
        return cy.get('input[id="input-:Rf6l6:"]')
    }
    checkedList(){
        return cy.get('input[name="isTncChecked"]')
    }
    btnContinue(){
        return cy.get('button[data-testid="register__button__sign-up"]')
    }
}
export default new mainPage()