import { ProjectTracker } from "../../pages/dashboard/projectTracker"
import user from "../../fixtures/login-data.json"
import data from ".././../fixtures/projectTracker-data.json"
import { defaultTimeout, screenshotOnRun } from "../../support/utils/config";

const projectTracker = new ProjectTracker();


describe('Project Tracker Search Tests',()=>{
    before(()=>{
        cy.login(user.validCredentials.email,user.validCredentials.password);
        //cy.url().should('contains','/project-tracker');
    })
    it.only('should search from Case No.',()=>{
        cy.wait(5000);
        projectTracker.setSearchText(data.searchBy.caseNo);
        cy.wait(5000);
        projectTracker.verifySearchResultContainsText(data.searchBy.caseNo);
        cy.takeScreenshot(screenshotOnRun);
        
    })

    // it('should search from Project Id',()=>{
    //     cy.wait(defaultTimeout);
    //     projectTracker.setSearchText(data.searchBy.projectID);
    //     cy.wait(defaultTimeout);
    //     projectTracker.verifySearchResultContainsText(data.searchBy.projectID);
    //     cy.takeScreenshot(screenshotOnRun);
    // })

    it('should search from Account Name',()=>{
        cy.wait(defaultTimeout);
        projectTracker.setSearchText(data.searchBy.accountName);
        cy.wait(defaultTimeout);
        projectTracker.verifySearchResultContainsText(data.searchBy.accountName);
        cy.takeScreenshot(screenshotOnRun);
    })

    it('should search from Subject',()=>{
        cy.wait(defaultTimeout);
        projectTracker.setSearchText(data.searchBy.subject);
        cy.wait(defaultTimeout);
        projectTracker.verifySearchResultContainsText(data.searchBy.subject);
        cy.takeScreenshot(screenshotOnRun);
    })

    it('should search from Status',()=>{
        cy.wait(defaultTimeout);
        projectTracker.setSearchText(data.searchBy.status);
        cy.wait(defaultTimeout);
        projectTracker.verifySearchResultContainsText(data.searchBy.status);
        cy.takeScreenshot(screenshotOnRun);
    })

    it('should search from Request Type',()=>{
        cy.wait(defaultTimeout);
        projectTracker.setSearchText(data.searchBy.requestType);
        cy.wait(defaultTimeout);
        projectTracker.verifySearchResultContainsText(data.searchBy.requestType);
        cy.takeScreenshot(screenshotOnRun);
    })
})
    // describe.only("Project Tracker Filter Tests", ()=>{
    //     beforeEach(()=>{
    //         cy.login(user.validCredentials.email,user.validCredentials.password);

    //     })

    //     it.only('should filter from Project ID', () => {
    //         cy.wait(defaultTimeout);
    //         projectTracker.clickFilter();
    //     })
        
    // })

