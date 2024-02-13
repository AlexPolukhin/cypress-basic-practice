describe('Same as second page but using getBySel instead', () => {

    beforeEach(() => {

        cy.visit('example-3')

    })

    it('field is empty and count equal max number', () => {

        cy.getBySel('input-first-name')
            .should('have.value', '')
        cy.getBySel('first-name-chars-left-count')
            .invoke('text')
            .should('equal', '15')

    })

    it('field has one character and count equal max number minus 1', () => {

            cy.getBySel('input-first-name')
                .type('1')
            cy.getBySel('first-name-chars-left-count')
                 .invoke('text')
                 .should('equal', '14')
            cy.getBySel('input-first-name')
                 .should('have.value', '1')

    })

    it('field has max characters and count equal 0 plus adding more than 15 characters', () => {

            cy.getBySel('input-first-name')
                .type('0123456789012345')
            cy.getBySel('first-name-chars-left-count')
                 .invoke('text')
                 .should('equal', '0')
            cy.getBySel('input-first-name')
                .should('have.value', '012345678901234')

    })

})

describe('Same as second page but using getBySel instead', () => {

    beforeEach(() => {

        cy.visit('example-3')

    })

    it('field is empty and count equal max number', () => {

        cy.getBySel('input-last-name')
            .should('have.value', '')
        cy.getBySel('last-name-chars-left-count')
            .invoke('text')
            .should('equal', '15')

    })

    it('field has one character and count equal max number minus 1', () => {

            cy.getBySel('input-last-name')
                .type('1')
            cy.getBySel('last-name-chars-left-count')
                 .invoke('text')
                 .should('equal', '14')
            cy.getBySel('input-last-name')
                 .should('have.value', '1')

    })

    it('field has max characters and count equal 0 plus adding more than 15 characters', () => {

            cy.getBySel('input-last-name')
                .type('0123456789012345')
            cy.getBySel('last-name-chars-left-count')
                 .invoke('text')
                 .should('equal', '0')
            cy.getBySel('input-last-name')
                .should('have.value', '012345678901234')

    })

})

