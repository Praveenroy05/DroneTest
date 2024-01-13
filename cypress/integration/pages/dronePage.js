class DronePage {
    visit() {
      cy.visit('https://www.drone.com/');
    }
  
    clickStartBtn() {
      cy.get('#startButton').click();
    }
  
    clickLandBtn() {
      cy.get('#landButton').click();
    }
  
    clickReturnHomeBtn() {
      cy.get('#returnHomeButton').click();
    }
  
    clickResumeBtn() {
      cy.get('#resumeButton').click();
    }
  
    isStartBtnDisabled() {
      cy.get('#startButton').should('be.disabled');
    }
  
    isStartBtnEnabled() {
      cy.get('#startButton').should('be.enabled');
    }
  }
  
  export default new DronePage();
  