/// <reference types="cypress"/>

let FIXTURE

describe('Same as second page but using getBySel instead', () => {

    beforeEach(() => {

        cy.visit('example-3')
        cy.fixture('example').then(
            (fixture) => (FIXTURE = fixture)
        )

    })

    it('page display correctly', () => {

        // correct page background
        cy.get('.sc-ifAKCX')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(14, 118, 168)')
        // correct contener background
        cy.get('.sc-EHOje')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(255, 255, 255)')
        // field 1 display
        cy.get('[data-cy="input-first-name"]')
            .should('be.visible')
        // field 2 display
        cy.get('[data-cy="input-last-name"]')
            .should('be.visible')
        cy.get('p').each(($el) => {
            expect($el.text().trim()).to.equal('You have 15 characters left');
          });
    })

    it('fielda are empty and count equal 15', () => {

        // first field
        cy.getBySel('input-first-name')
            .should('have.value', '')
        cy.getBySel('first-name-chars-left-count')
            .invoke('text')
            .should('equal', '15')
        // second field
        cy.getBySel('input-last-name')
            .should('have.value', '')
        cy.getBySel('last-name-chars-left-count')
            .invoke('text')
            .should('equal', '15')

    })

    it('first field and counter works properly', () => {

        // field limit
        const initialValue = 15
        //random character
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
        let typedCharacters = ''
        
        for(let i = 0; i < initialValue; i++) {
            //type random characters
            const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length))
            // accumulate typed characters
            typedCharacters += randomCharacter

            cy.getBySel('input-first-name')
                .type(randomCharacter)
            cy.getBySel('first-name-chars-left-count')
                .should('have.text', String(initialValue - i - 1))
            
        }

        // check that field has typed characters
        cy.getBySel('input-first-name')
            .should('have.value', typedCharacters)

    })

    it('second field and counter works properly', () => {

        // field limit
        const initialValue = 15
        //random character
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
        let typedCharacters = ''
        
        for(let i = 0; i < initialValue; i++) {
            //type random characters
            const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length))
            // accumulate typed characters
            typedCharacters += randomCharacter

            cy.getBySel('input-last-name')
                .type(randomCharacter)
            cy.getBySel('last-name-chars-left-count')
                .should('have.text', String(initialValue - i - 1))
            
        }

        // check that field has typed characters
        cy.getBySel('input-last-name')
            .should('have.value', typedCharacters)

    })

    it('fields display only 15 characters', () => {

        // first field
        cy.getBySel('input-first-name')
            // type 16 characters
            .type('0123456789012345')
            // check that only 15 characters display
            .should('have.value', '012345678901234')
        cy.getBySel('first-name-chars-left-count')
            .should('have.text', '0')

        // second field
        cy.getBySel('input-last-name')
            // type 16 characters
            .type('0123456789012345')
            // check that only 15 characters display
            .should('have.value', '012345678901234')
        cy.getBySel('last-name-chars-left-count')
            .should('have.text', '0')
    })

})



