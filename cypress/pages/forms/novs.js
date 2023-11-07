export class Novs{
    createNovsButton = "[tabindex='0'] > .mat-button-wrapper"
    searchField = "//div[@class='input-icons']//input[@placeholder='Search']"

    //General Information Fields
    vvbAccreditationBody = "//input[@id='mat-input-7']"

    //Project Information
    projectId = "//input[@id='mat-input-10']"

    //Services and Site Visit Information
    validationCheckBox = "//label[@for='mat-checkbox-5-input']//span[@class='mat-checkbox-inner-container']"
    verificationCheckBox = "//label[@for='mat-checkbox-6-input']//span[@class='mat-checkbox-inner-container']"
    servicePerProgram = "//input[@id='mat-input-13']"
    vcsSectoralScope = "//input[@id='mat-input-14']"
    sdVistaSectoralScope = "//div[@class='mat-form-field-infix ng-tns-c103-46']"
    vcsYesRadioButton = "//label[@for='mat-radio-2-input']//span[@class='mat-radio-outer-circle']"
    vcsNoRadioButton = "//label[@for='mat-radio-3-input']//span[@class='mat-radio-outer-circle']"
    ccbYesRadioButton = "//label[@for='mat-radio-5-input']//span[@class='mat-radio-outer-circle']"
    ccbNoRadioButton = "//label[@for='mat-radio-6-input']//span[@class='mat-radio-outer-circle']"
    sdVistaYesRadioButton = "//label[@for='mat-radio-8-input']//span[@class='mat-radio-outer-circle']"
    sdVistaNoRadioButton = "//label[@for='mat-radio-9-input']//span[@class='mat-radio-outer-circle']"
    plasticYesRadioButton = "//label[@for='mat-radio-11-input']//span[@class='mat-radio-outer-circle']"
    plasticNoRadioButton = "//label[@for='mat-radio-12-input']//span[@class='mat-radio-outer-circle']"

    isAuditYesRadioButton = "//label[@for='mat-radio-14-input']//span[@class='mat-radio-outer-circle']"
    isAuditNoRadioButton = "//label[@for='mat-radio-14-input']//span[@class='mat-radio-outer-circle']"

    




    clickCreateNovsButton(){
        cy.get(this.createNovsButton).click();
    }

    setSearchText(text){
        cy.get(this.searchField).click({force: true}).type(text);
    }
    setProjectId(text){
        cy.get(this.projectId).type(text + {enter});
    }

}