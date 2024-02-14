/// <reference types="cypress"/>

let FIXTURE

describe('Welcome page: page and boxes display', () => {

    beforeEach(() => {
        
        cy.visit('/')
        cy.fixture('example').then(
            (fixture) => (FIXTURE = fixture)
        )

    })

    it('buttons display', () => {

        cy.get('.sc-gZMcBi')
            .should('be.visible')
            .and('have.css', 'text-align', 'center')
        cy.get('.sc-VigVT')
            .should('have.length', '4')

    })

    it('buttons have correct background', () => {

        cy.get('.sc-VigVT').each(($el) => {
            cy.wrap($el)
                .and('have.css', 'background-color', 'rgb(14, 118, 168)')
            
        })

    })

    it('buttons have correct text', () => {

        const expectedText = ["Example 1", "Example 2", "Example 3", "Example 4"]

        cy.get('.sc-VigVT').each(($el, index) => {
            cy.wrap($el)
                .should('have.text', expectedText[index])
        })
        
    })

    it('buttons have correct links', () => {
        
        const expectedLink = ["/example-1", "/example-2", "/example-3", "/example-4"]

        cy.get('.sc-VigVT').each(($el, index) => {
            cy.wrap($el)
                .parent()
                .should('have.attr', 'href', expectedLink[index])
        })

    })

})