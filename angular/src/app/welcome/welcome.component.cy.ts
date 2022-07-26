import { Component, EventEmitter } from "@angular/core"
import { TestBedConfig } from "cypress/angular"
import { ButtonComponent } from "../button/button.component"
import { WelcomeComponent } from "./welcome.component"

describe('WelcomeComponent', () => {
    const config: TestBedConfig<WelcomeComponent> = {
        declarations: [ButtonComponent],
    }
    it('should mount with greeting', () => {
        cy.mount(WelcomeComponent, {
            ...config,
            inputs: {
                username: 'Test User'
            },
        }).then(response => {
            cy.spy(response.component.onLogout, 'emit').as('onLogout')
        })
        cy.contains('Welcome Test User')
    })

    it('when the log out button is clicked, onLogout should be called', () => {
        cy.mount(WelcomeComponent, config).then(response => {
            cy.spy(response.component.onLogout, 'emit').as('onLogout')
        })
        cy.get('button').contains('Log Out').click()
        cy.get('@onLogout').should('have.been.called')
    })
})