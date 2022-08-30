import SlotExample from "./SlotExample.svelte";
import html from "svelte-htm";

// Using "svelte-htm" to allow Svelte Component templates
// see: https://github.com/kenoxa/svelte-htm
it("should render with slot", () => {
  let headerSlotMessage = "first";
  let defaultSlotMessage = "second";
  let footerSlotMessage = "third";

  cy.mount(html`
    <${SlotExample}>
      <li>${defaultSlotMessage}</li>
      <li slot="header">${headerSlotMessage}</li>
      <li slot="footer">${footerSlotMessage}</li>
    <//>
  `);

  cy.get("li").eq(0).contains(headerSlotMessage);
  cy.get("li").eq(1).contains(defaultSlotMessage);
  cy.get("li").eq(2).contains(footerSlotMessage);
});
