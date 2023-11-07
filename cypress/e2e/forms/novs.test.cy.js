import { defaultTimeout,screenshotOnRun } from "../../support/utils/config";
import user from "../../fixtures/login-data.json"
import { ProjectTracker } from "../../pages/dashboard/projectTracker";
import { Novs } from "../../pages/forms/novs";
const projectTracker = new ProjectTracker();
const novs = new Novs();

describe('Project Tracker Search Tests',()=>{
    before(()=>{
        cy.login(user.validCredentials.email, user.validCredentials.password);
        //cy.url().should('contains','/project-tracker');
    })

    it('NOVS', () => {
        
        projectTracker.clickMenu();
        cy.wait(defaultTimeout);
        projectTracker.clickNovs();
        novs.clickCreateNovsButton();

    })

})