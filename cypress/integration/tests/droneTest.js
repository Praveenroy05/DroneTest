import DronePage from '../pages/dronePage';

describe('Drone Automation Tests', () => {

  beforeEach(() => {
    DronePage.visit();
  });

  it('Start Button check', () => {
    DronePage.clickStartBtn();
    cy.wait(2000);
    DronePage.isStartBtnDisabled();
    DronePage.isStartBtnDisabled();
  });

  it('Land Button and click on Resume', () => {
    DronePage.clickLandBtn();
    cy.wait(2000);
    DronePage.clickResumeBtn();
    DronePage.isStartBtnDisabled();
  });

  it('Return Home Button and click on Resume', () => {
    DronePage.clickReturnHomeBtn();
    cy.wait(2000);
    DronePage.clickResumeBtn();
    DronePage.isStartBtnDisabled();
  });

  it('Resume without Start', () => {
    DronePage.clickResumeBtn();
    DronePage.isStartBtnEnabled();
  });

  it('Start after Land', () => {
    DronePage.clickLandBtn();
    DronePage.clickStartBtn();
    DronePage.isStartBtnDisabled();
  });
});
