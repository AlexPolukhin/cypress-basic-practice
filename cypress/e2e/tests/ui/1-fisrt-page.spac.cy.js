describe('First page cases', () => {

    beforeEach(() => {

        cy.visit('example-1')

    })

    it('Page works and text is correct', () => {

        cy.get('h1')
            .invoke('text')
            .should('equal', 'My Awesome Web Application')

    })

})
