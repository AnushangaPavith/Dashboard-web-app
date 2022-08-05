describe("renders the dashboard page", () => {
	it("login renders correctly", () => {
		cy.visit("http://localhost:3000/");
		cy.get("#username").type("1234X");
		cy.get("#password").type("1234");
		cy.get("#loginForm").submit();

		cy.get("#add-machine-btn").click();
		cy.get("#Machine_ID").type("D100");
		cy.get("#Mold_ID").type("m100");
		cy.get("#Mold_Shots").type("0");
		cy.get("#Mona_Number").type("mona100");
		cy.get("#Material").type("Material");
		cy.get("#Mold_Maker").type("Sri Lanka");
		cy.get("#add-machine-submit").click();
	});
})