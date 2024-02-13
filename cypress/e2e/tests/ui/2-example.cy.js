/// <reference types="cypress"/>

let FIXTURE

describe('Second page cases: text field and number counter', () => {

    beforeEach(() => {
        
        cy.visit('example-2')
        cy.fixture('example').then(
            (fixture) => (FIXTURE = fixture)
        )

    })

    it('page display correctly', () => {

        // correct page background
        cy.get('.sc-bwzfXH')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(14, 118, 168)')
        // correct contener background
        cy.get('.sc-htpNat')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(255, 255, 255)')
        // field display
        cy.get('[data-cy="max-char-input"]')
            .should('be.visible')
        cy.get('p')
            .invoke('text')
            .should('eq', FIXTURE.default_text)

    })

    it('field is empty and count equal 15', () => {

        cy.get('[data-cy=max-char-input]')
            .should('have.value', '')
        cy.get('[data-cy=chars-left-count]')
            .invoke('text')
            .should('equal', '15')

    })

    it('field and counter works properly', () => {

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

            cy.get('[data-cy=max-char-input]')
                .type(randomCharacter)
            cy.get('[data-cy=chars-left-count]')
                .should('have.text', String(initialValue - i - 1))
            
        }

        // check that field has typed characters
        cy.get('[data-cy="max-char-input"]')
            .should('have.value', typedCharacters)

    })

    it('field display only 15 characters', () => {

        cy.get('[data-cy="max-char-input"]')
            // type 16 characters
            .type('0123456789012345')
            // check that only 15 characters display
            .should('have.value', '012345678901234')
        cy.get('[data-cy=chars-left-count]')
            .should('have.text', '0')

    })
})
