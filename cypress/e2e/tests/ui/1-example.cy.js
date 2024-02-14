/// <reference types="cypress"/>

let FIXTURE

describe('First page cases', () => {

    beforeEach(() => {

        cy.visit('example-1')
        cy.fixture('example').then(
            (fixture) => (FIXTURE = fixture)
        )

    })

    it('Page display with correct background', () => {

        cy.get('.sc-bdVaJa')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(14, 118, 168)')
            
    })

    it('text is correct', () => {

        cy.get('h1')
            .should('be.visible')
            .and('have.text', FIXTURE.title)

    })

    it('text display in center', () => {

        cy.get('.sc-bdVaJa')
            .should('have.css', 'justify-content')
            .and('eq', 'center')

    })

    it('text in white', () => {

        cy.get('.sc-bdVaJa')
            .should('have.css', 'color')
            .and('eq', 'rgb(255, 255, 255)')

    })

    it('text has correct font-size', () => {

        cy.get('.sc-bdVaJa')
            .should('have.css', 'font-size')
            .and('eq', '32px')

    })

})
