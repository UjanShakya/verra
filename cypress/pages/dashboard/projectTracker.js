

export class ProjectTracker{
   
    title = "//span[@class='navBar-title h1 mb-0 ng-star-inserted']"
    search = ".input-icons .form-control input-field ng-pristine ng-valid ng-touched"
    avatarIcon = "//div[@class='dropdownBtn-avatar me-1']"
    searchResults = "//tbody"
    filter = ".mat-header-row cdk-header-row ng-star-inserted .mat-sort-header mat-header-cell cdk-header-cell fw-bold ng-tns-c193-11 cdk-column-caseNo mat-column-caseNo ng-star-inserted .mat-sort-header-container mat-focus-indicator ng-tns-c193-11"
    
    forms = ":nth-child(1) > app-primary-dropdown-menu > .mat-list-item > .mat-list-item-content > .mat-list-icon"
   
    novs = ":nth-child(1) > app-primary-dropdown-menu > .mat-list-item > .mat-list-item-content > .mat-list-icon"

   getTitle(){

    return cy.get(this.title);

   }

   setSearchText(text){
     
      cy.xpath("//div[@class='input-icons']//input[@placeholder='Search']").scrollIntoView().click({force: true}).type(text);
      
   }

   verifySearchResultContainsText(text){
      cy.xpath(this.searchResults).should('contain', text);
   }
   // clickMenu(text){
   //    cy.get(".mat-toolbar .menu_display_flex expanded_menu_wrapper_class").invoke('show')
   //    cy.contains(text).click();
   // }
   clickMenu(){
      cy.get(this.forms).click();
   }
   clickNovs(){
      cy.get(this.novs).click();
   }

   clickFilter(){
      cy.get('.cdk-column-projectId > .mat-sort-header-container > .mat-sort-header-content > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click({force: true});
   }

   clickAvatarIcon(){
    cy.get(this.avatarIcon).click();
   }

}