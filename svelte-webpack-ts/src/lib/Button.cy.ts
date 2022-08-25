import Button from "./Button.svelte";

it("should mount", () => {
  cy.mount(Button, { props: { msg: "Hello World!" } });
  cy.contains("button", "Hello World!");
});
