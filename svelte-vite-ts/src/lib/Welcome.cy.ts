import Welcome from "./Welcome.svelte";

describe("Welcome", () => {
  it("should mount with greeting", () => {
    cy.mount(Welcome, {
      props: {
        username: "Test User",
      },
    });
    cy.contains("Welcome Test User!");
  });

  it("when the log out button is clicked, onLogout should be called", () => {
    cy.mount(Welcome, {
      props: {
        username: "Test User",
      },
    }).then(({ component }) => {
      component.$on("logout", cy.spy().as("logoutSpy"));
    });

    cy.get("button").contains("Log Out").click();
    cy.get("@logoutSpy").should("have.been.called");
  });
});
