describe('Second page cases: text field and number counter', () => {

    beforeEach(() => {

        cy.visit('example-2')

    })

    it('field is empty and count equal max number', () => {

        cy.get('[data-cy=max-char-input]')
            .should('have.value', '')
        cy.get('[data-cy=chars-left-count]')
            .invoke('text')
            .should('equal', '15')

    })

    it('field has one character and count equal max number minus 1', () => {

            cy.get('[data-cy=max-char-input]')
                .type('1')
            cy.get('[data-cy=chars-left-count]')
                 .invoke('text')
                 .should('equal', '14')
            cy.get('[data-cy=max-char-input]')
                 .should('have.value', '1')

    })

    it('field has max characters and count equal 0 plus adding more than 15 characters', () => {

            cy.get('[data-cy=max-char-input]')
                .type('0123456789012345')
            cy.get('[data-cy=chars-left-count]')
                 .invoke('text')
                 .should('equal', '0')
            cy.get('[data-cy=max-char-input]')
                .should('have.value', '012345678901234')

    })




})
