describe("Scenario -1 Test to visit lambatest Selenium  play ground URL & select Default value", () => {
  it("visit the URL", () => {
    cy.visit("https://www.lambdatest.com/selenium-playaround");
    cy.wait(100);
    cy.xpath('//p[text()="Progress Bar & Sliders"]').click({ force: true });
    cy.xpath('//a[text()="Drag & Drop Sliders"]').click({ force: true });
    cy.get(".sp__range").eq(0).as("slider");
    cy.get("@slider").trigger("mousedown", { which: 1 });
    cy.get("@slider").trigger("mousemove", 95, 0, { force: true });
    cy.get("@slider").trigger("mouseup", { force: true });
  });
});

describe("Scenario -2 Test to fill the Input form and capture performacce", () => {
  it("visit the URL", () => {
    cy.visit(
      "https://www.lambdatest.com/selenium-playground/input-form-demo.html"
    );
    cy.get('input[name="name"]').type("TestLambda");
    cy.get('input[name="password"]').type("1234aaaa12");
    cy.get('textarea[name="address"]').type("123 Main Street");
    cy.get('input[name="email"]').type("TestLambda.Program@example.com");
    cy.get('input[name="company"]').type("TestLamda");
    cy.get('input[name="website"]').type("https://www.lambdatest.com");
    cy.get('select[name="Country*"]').select("Albania");
    cy.get('input[name="city"]').type("Albania");
    cy.get('input[name="address_line2"]').type("123 Main Street");
    cy.get('input[name="address_line1"]').type("1/250");
    cy.get('input[id="inputState"]').type("Albania");
    cy.get('input[name="zip"]').type("10000");
    cy.get('button[type="submit"]').click();

    // Assert that the form gets submitted
    cy.url().should("include", "input-form-thank-you-demo.html");

    // Verify performance metrics using Cypress Lighthouse commands
    cy.lighthouse({
      performance: 50,
      accessibility: 80,
      seo: 90,
      bestPractices: 70,
      pwa: 50,
    });

    // Validate the success message
    cy.contains(
      "Thanks for contacting us, we will get back to you shortly."
    ).should("be.visible");

    // Close the browser tab and session
    cy.window().then((win) => {
      win.close();
    });
  });
});
