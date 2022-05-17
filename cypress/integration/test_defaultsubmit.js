describe("Go to inspiraition app", () => {

  it("Visits the inspiraition webpage and submits the default text area", () => {
    cy.visit("http://localhost:3000/")
    cy.get("form").contains("Write a thing about any topic").click()
    cy.get("button").contains("Submit").click()
    
  })

  it('Button Reset - clears an input or textarea element', () => {
    cy.get("button").contains("Reset").click()
  })

  it("selects an option from both dropdown menus and selected text is then found in textarea", () => {
    cy.get("button").contains("thing")
    cy.get("[id^=input-group-dropdown-1]").click().get("[data-testid=catchline]").click()
    cy.get("button").contains("any topic")
    cy.get("[id^=input-group-dropdown-2]").click().get("[data-testid=myfavoritestore]").click()
    cy.get("button").contains("Submit").click()
  })

  it('clicks on a prompts heart icon and the icon changes color', () => {
    cy.get("[data-testid=heart]").click({ multiple: true }).should()
  })

})

