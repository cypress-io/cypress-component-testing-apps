import { Component, ViewChild } from "@angular/core"
import { ButtonComponent } from "./button.component"

@Component({
    template: `
        <app-button>
            Click Me
        </app-button>
    `
})
class WrapperComponent {}

describe('ButtonComponent', () => {
    it('can mount using WrapperComponent', () => {
        cy.mount(WrapperComponent, {
            declarations: [ButtonComponent],
        })
        cy.get('button').contains('Click Me')
    })

    it('can mount using template syntax', () => {
        cy.mount('<app-button>Click Me</app-button>', {
            declarations: [ButtonComponent],
        })
        cy.get('button').contains('Click Me')
    })

    it('when button is clicked, should call onClick', () => {
        cy.mount(ButtonComponent).then(response => {
            cy.spy(response.component.onClick, 'emit').as('onClick')
            cy.get('button').click();
            cy.get('@onClick').should('have.been.called')
        })

    })

    it('when button is clicked, should call onClick using autoSpyOutputs', () => {
        cy.mount(ButtonComponent, {
            autoSpyOutputs: true
        })
        cy.get('button').click()
        cy.get('@onClickSpy').should('have.been.called')
    })
})