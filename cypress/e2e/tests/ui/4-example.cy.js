/// <reference types="cypress"/>

let FIXTURE

describe('First block, commands: dblClick', () => {

    beforeEach(() => {

        cy.visit('/example-4')
        cy.fixture('example').then(
            (fixture) => (FIXTURE = fixture)
        )

    })

    it('Nothing selected when page loaded', () => {

        cy.getBySel('box-1-selected-name')
            .invoke('text')
            .should('equal', 'Nothing selected')

    })

    it('Nothing selected when only single click made', () => {

        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .each(($el) => {
                cy.wrap($el)
                    .realClick()
                    .should('have.css', 'background-color', 'rgb(221, 221, 221)')
                cy.getBySel('box-1-selected-name')
                    .should('have.text', FIXTURE.selected_item)
            })

    })

    it('Option one can be selected and correct name appear in item', () => {

        // click on first option
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(0)
            .click()
            .should('have.css', 'background-color', 'rgb(221, 221, 221)')
        // second and third stay unselected with proper color
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(1)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(2)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        // double click on first option
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(0)
            .dblclick()
        cy.getBySel('box-1-selected-name')
            .invoke('text')
            .should('equal', 'Option One')
        // second and third stay unselected with proper color
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(1)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(2)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

    })

    it('Option two can be selected and correct name appear in item', () => {

        // click on second option
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(1)
            .click()
            .should('have.css', 'background-color', 'rgb(221, 221, 221)')
        // first and third stay unselected with proper color
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(0)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(2)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        // double click on first option
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(1)
            .dblclick()
        cy.getBySel('box-1-selected-name')
            .invoke('text')
            .should('equal', 'Option Two')
        // second and third stay unselected with proper color
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(0)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(2)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

    })

    it('Option three can be selected and correct name appear in item', () => {

        // click on third option
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(2)
            .click()
            .should('have.css', 'background-color', 'rgb(221, 221, 221)')
        // first and second stay unselected with proper color
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(0)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(1)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        // double click on third option
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(2)
            .dblclick()
        cy.getBySel('box-1-selected-name')
            .invoke('text')
            .should('equal', 'Option Three')
        // first and second stay unselected with proper color
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(0)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        cy.get('[data-cy="box-1-items-list"]')
            .find('li')
            .eq(1)
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

    })

})
// TODO: review below

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