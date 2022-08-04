import { MountConfig } from "cypress/angular"
import { ButtonComponent } from "../button/button.component"
import { WelcomeComponent } from "./welcome.component"

describe('WelcomeComponent', () => {
    const config: MountConfig<WelcomeComponent> = {
        declarations: [ButtonComponent],
    }
    it('should mount with greeting', () => {
        cy.mount(WelcomeComponent, {
            ...config,
            componentProperties: {
                username: 'Test User'
            },
        }).then(response => {
            cy.spy(response.component.onLogout, 'emit').as('onLogout')
        })
        cy.contains('Welcome Test User')
    })

    it('when the log out button is clicked, onLogout should be called using autoSpyOutputs', () => {
        cy.mount(WelcomeComponent, {
            ...config,
            autoSpyOutputs: true
        })
        cy.get('button').contains('Log Out').click()
        cy.get('@onLogoutSpy').should('have.been.called')
    })
})