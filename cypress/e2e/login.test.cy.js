import user from "../fixtures/login-data.json"
describe('Login Tests', () => {
  // beforeEach(() => {
  //     cy.fixture('login-data.json').as('data');
  // });
  it.only('should login successfully', () => {
    cy.login(user.validCredentials.email, user.validCredentials.password)
    //cy.login(data.validCredentails.email, data.validCredentails.password);
    cy.url().should('eq','https://projecthub-uat.verra.org/project-tracker');
  })
  it('should display error message with invalid password', () =>{
    cy.login('reshma@esrtech.io', 'testest')
    cy.contains('Your password is incorrect.').should('exist');
  })
 


})