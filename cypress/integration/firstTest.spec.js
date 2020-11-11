/// <reference types="cypress" />

describe("Form Testing", () => {
    it("Visit Page, Changing theme to Lightmode and Testing Inline Form", () => {
      cy.visit("/");
      cy.contains("Forms").click();
      cy.contains("Form Layouts").click();
      cy.contains("Light").click();
      cy.contains("Dark").click();
      cy.contains("nb-card", "Inline form")
        .find('[placeholder="Jane Doe"]')
        .click()
        .type("Anggit Firmansyah")
        .should("have.value", "Anggit Firmansyah");
      cy.contains("nb-card", "Inline form")
        .find('[placeholder="Email"]')
        .click()
        .type("anggitfirmans47@gmail.com")
        .should("have.value", "anggitfirmans47@gmail.com");
      cy.contains("nb-card", "Inline form").find(".custom-checkbox").click();
    });
  
    it("Testing Using the Grid", () => {
      cy.get("#inputEmail1")
        .type("anggit@gmail.com")
        .should("have.value", "anggit@gmail.com");
      cy.get("#inputPassword2").type("anggit123").should("have.value", "anggit123");
      cy.contains("Option 1").click();
    });
  
    it("Testing Basic Form", () => {
      cy.get("#exampleInputEmail1")
        .type("anggitfirmans47@gmail.com")
        .should("have.value", "anggitfirmans47@gmail.com");
      cy.get("#exampleInputPassword1")
        .type("Anggit47")
        .should("have.value", "Anggit47");
      cy.contains("Check me out").click();
    });
  
    it("Testing Form Without Labels", () => {
        cy.get('[placeholder="Recipients"]')
          .type("Anggit Firmansyah")
          .should("have.value", "Anggit Firmansyah");
        cy.get('[placeholder="Subject"]')
          .type("Assalamualaikum")
          .should("have.value", "Assalamualaikum");
        cy.get('textarea[placeholder="Message"]')
          .type("Assalamualaikum, saya Anggit Firmansyah")
          .should("have.value", "Assalamualaikum, saya Anggit Firmansyah");
      });
  
    it("Testing Block form", () => {
      cy.get("#inputFirstName")
        .type("Anggit Firmansyah")
        .should("have.value", "Anggit Firmansyah");
      cy.get("#inputLastName").type("Anggit").should("have.value", "Anggit");
      cy.get("#inputEmail")
        .type("anggitfirmans47@gmail.com")
        .should("have.value", "anggitfirmans47@gmail.com");
      cy.get("#inputWebsite")
        .type("https://www.instagram.com/anggitfirmans/?hl=id")
        .should("have.value", "https://www.instagram.com/anggitfirmans/?hl=id");
    });
  });
  