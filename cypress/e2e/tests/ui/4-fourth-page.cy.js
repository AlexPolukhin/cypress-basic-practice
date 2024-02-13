describe('First block, commands: dblClick', () => {

    beforeEach(() => {
        cy.visit('/example-4')
    })

    it('Option one can be selected and correct name appear in item', () => {
        cy.get('[data-cy="box-1-items-list"] > :nth-child(1)')
            .dblclick()
        cy.getBySel('box-1-selected-name')
            .invoke('text')
            .should('equal', 'Option One')

    })

    it('Option two can be selected and correct name appear in item', () => {
            cy.getBySel('box-1-items-list')
                .find('li')
                .eq(1)
                .dblclick()
            cy.getBySel('box-1-selected-name')
                .invoke('text')
                .should('equal', 'Option Two')

    })

    it('Option three can be selected and correct name appear in item', () => {
                cy.getBySel('box-1-items-list')
                    .find('li')
                    .eq(2)
                    .dblclick()
                cy.getBySel('box-1-selected-name')
                    .invoke('text')
                    .should('equal', 'Option Three')

    })

    it('Nothing selected when page loaded', () => {
        cy.getBySel('box-1-selected-name')
            .invoke('text')
            .should('equal', 'Nothing selected')
    })

    it('Nothing selected when only single click made', () => {
            cy.getBySel('box-1-items-list')
                .find('li')
                .eq(0)
                .click()
            cy.getBySel('box-1-selected-name')
                .invoke('text')
                .should('equal', 'Nothing selected')
    })

})

describe('Second block, commands: check', () => {

    beforeEach(() => {
        cy.visit('/example-4')
    })

    it('Validate checkboxes and count works. Zero checkboxes selected on load', () => {
        cy.getBySel('box-2-selected-count')
            .invoke('text')
            .should('equal', '0')
        cy.get('[data-cy="box-2-checkboxes"] > :nth-child(1)')
            .click()
        cy.get('[data-cy="box-2-checkboxes"] > :nth-child(2)')
            .click()
        cy.get('[data-cy="box-2-checkboxes"] > :nth-child(3)')
            .click()
        cy.getBySel('box-2-selected-count')
            .invoke('text')
            .should('equal', '3')
    })
})

describe('Third block, commands: select', () => {

    beforeEach(() => {
        cy.visit('/example-4')
    })

    it('Validate dropdown', () => {
        cy.getBySel('box-3-selected-name')
            .invoke('text')
            .should('equal', 'Nothing selected')
        cy.getBySel('box-3-dropdown')
            .select(0)
        cy.getBySel('box-3-selected-name')
            .invoke('text')
            .should('equal', 'Option One')
        cy.getBySel('box-3-dropdown')
            .select(1)
        cy.getBySel('box-3-selected-name')
            .invoke('text')
            .should('equal', 'Option Two')
        cy.getBySel('box-3-dropdown')
            .select(2)
        cy.getBySel('box-3-selected-name')
            .invoke('text')
            .should('equal', 'Option Three')
    })
})

describe('Fourth block, commands: trigger', () => {

    beforeEach(() => {
        cy.visit('example-4')
    })

    it('Validate hover', () => {
        cy.getBySel('box-4-selected-name')
            .invoke('text')
            .should('equal', 'Nothing selected')
        cy.get('[data-cy="box-4-items-list"] > :nth-child(1)')
            .trigger('mouseover')
        cy.getBySel('box-4-selected-name')
            .invoke('text')
            .should('equal', 'Option One')

        cy.get('[data-cy="box-4-items-list"] > :nth-child(2)')
            .trigger('mouseover')
        cy.getBySel('box-4-selected-name')
            .invoke('text')
            .should('equal', 'Option Two')

        cy.get('[data-cy="box-4-items-list"] > :nth-child(3)')
            .trigger('mouseover')
        cy.getBySel('box-4-selected-name')
            .invoke('text')
            .should('equal', 'Option Three')
    })
})

