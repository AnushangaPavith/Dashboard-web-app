describe("renders the dashboard page", () => {
  it("renders correctly", () => {
      cy.visit("http://localhost:3000/");
      cy.get("#username").type("1234X");
      cy.get("#password").type("1234");
      cy.get("#loginForm").submit();
  })
})