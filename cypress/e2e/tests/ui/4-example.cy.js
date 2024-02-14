/// <reference types="cypress"/>

let FIXTURE

describe('Third page: page and containers display', () => {
    
    beforeEach(() => {
        
        cy.visit('example-4')
        cy.fixture('example').then(
            (fixture) => (FIXTURE = fixture)
        )

    })

    it('page display correctly', () => {

        // correct page background
        cy.get('.sc-gzVnrw')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(14, 118, 168)')
        // correct conteners background and lenght
        cy.get('.sc-htoDjs')
            .should('have.length', '4')
            .each(($el) => {
                cy.wrap($el)
                    .should('have.css', 'background-color')
                    .and('eq', 'rgb(255, 255, 255)')
        })

    })

});

describe('First block, commands: dblClick', () => {

    beforeEach(() => {

        cy.visit('/example-4')
        cy.fixture('example').then(
            (fixture) => (FIXTURE = fixture)
        )

    })

    it('First block text is correct', () => {
        
        cy.get(':nth-child(1) > .sc-dnqmqq')
            .should('have.text', FIXTURE.first_block_title)
            .next()
            .should('have.text', FIXTURE.first_block_text)
            .next()
            .should('have.text', FIXTURE.First_block_subtext)

    });

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

describe('Second block, commands: check', () => {

    beforeEach(() => {

        cy.visit('/example-4')
        cy.fixture('example').then(
            (fixture) => (FIXTURE = fixture)
        )

    })

    it('Second block text is correct', () => {
        
        cy.get(':nth-child(2) > .sc-dnqmqq')
            .should('have.text', FIXTURE.second_block_title)
        cy.get('.sc-htoDjs')
            .eq(1)
            .within(() => {
                cy.contains(FIXTURE.second_block_text)
            })

    });

    it('Validate checkboxes and count works. Zero checkboxes selected on load', () => {

        // initial value is 0
        cy.getBySel('box-2-selected-count')
            .invoke('text')
            .should('equal', '0')

        // checkboxes can be checked
        cy.get('[data-cy="box-2-checkboxes"]').find('label').each(($el, index) => {
                cy.wrap($el)
                    .realClick()
                cy.get('[data-cy="box-2-selected-count"]')
                    .invoke('text')
                    .then((text) => {
                        expect(parseInt(text)).to.equal(index + 1)
                    })
        })
        
        // checkboxes can be unchecked
        cy.get('[data-cy="box-2-checkboxes"]').find('label').each(($el, index, $list) => {
                cy.wrap($el)
                    .realClick()
                cy.get('[data-cy="box-2-selected-count"]')
                    .invoke('text')
                    .then((text) => {
                        expect(parseInt(text)).to.equal($list.length - (index + 1))
                    })
        })

    })

})

describe('Third block, commands: select', () => {

    beforeEach(() => {

        cy.visit('/example-4')
        cy.fixture('example').then(
            (fixture) => (FIXTURE = fixture)
        )
    })

    it('Third block text is correct', () => {
        
        cy.get(':nth-child(3) > .sc-dnqmqq')
            .should('have.text', FIXTURE.third_block_title)
        cy.get('.sc-htoDjs')
            .eq(2)
            .within(() => {
                cy.contains(FIXTURE.third_block_text)
            })

    })

    it('Validate initial state', () => {

        cy.getBySel('box-3-selected-name')
            .invoke('text')
            .should('equal', 'Nothing selected')

    })

    it('Validate first option', () => {

        cy.getBySel('box-3-dropdown')
            .select(0)
            .should('have.value', 'Option One')
        cy.getBySel('box-3-selected-name')
            .invoke('text')
            .should('equal', 'Option One') // Issue: incorrect text in app after click

    })

    it('Validate second option', () => {

        cy.getBySel('box-3-dropdown')
            .select(1)
            .should('have.value', 'Option Two')
        cy.getBySel('box-3-selected-name')
            .invoke('text')
            .should('equal', 'Option Two')

    })

    it('Validate third option', () => {

        cy.getBySel('box-3-dropdown')
            .select(2)
            .should('have.value', 'Option Three')
        cy.getBySel('box-3-selected-name')
            .invoke('text')
            .should('equal', 'Option Three')

    })

    it('Validate first can be displayed', () => {

        // first select third option
        cy.getBySel('box-3-dropdown')
            .select(2)
            .should('have.value', 'Option Three')
        cy.getBySel('box-3-selected-name')
            .invoke('text')
            .should('equal', 'Option Three')
        
        // now select first one
        cy.getBySel('box-3-dropdown')
            .select(0)
            .should('have.value', 'Option One')
        cy.getBySel('box-3-selected-name')
            .invoke('text')
            .should('equal', 'Option One')

    })
})

describe('Fourth block, commands: trigger', () => {

    beforeEach(() => {

        cy.visit('example-4')
        cy.fixture('example').then(
            (fixture) => (FIXTURE = fixture)
        )

    })

    it('Fourth block text is correct', () => {

        cy.get(':nth-child(4) > .sc-dnqmqq')
            .should('have.text', FIXTURE.fourth_block_title)
        cy.get('.sc-htoDjs')
            .eq(3)
            .within(() => {
                cy.contains(FIXTURE.fourth_block_text)
            })

    })

    it('Nothing selected when page loaded', () => {

        cy.getBySel('box-4-selected-name')
            .invoke('text')
            .should('equal', 'Nothing selected')

    })

    it('Validate hover', () => {

        const expectedHover = ["Option One", "Option Two", "Option Three"]

        cy.get('[data-cy="box-4-items-list"]').find('li').each(($el, index) => {
            cy.wrap($el)
                .realHover()
                .should('have.css', 'background-color', 'rgb(221, 221, 221)')
            cy.getBySel('box-4-selected-name')
                .should('have.text', expectedHover[index])
        })

    })

})