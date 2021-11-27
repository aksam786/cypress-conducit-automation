const {UIIntegration} = require('../../page-objects/ui-integration.page');
const Data =  require('../../fixtures/testData');

describe("Sign In and check if user lands on Home Page and Update Username and Validate it", async () => {
    Cypress.config('defaultCommandTimeout', 10000);
    const uiIntegration = new UIIntegration();
    beforeEach( () => {
        cy.visit("http://localhost:4100/");
    })
    it("Sign In and Update Username and Validate it", () => {

        // Sign In

        uiIntegration.clickSignIn();
        cy.get('h1').should('have.text', 'Sign In')
        uiIntegration.fillSignInEmail(Data.SignInEmail);
        uiIntegration.fillSignInPassword(Data.SignInPassword);
        uiIntegration.clickSignInSubmitButton();
        cy.xpath('//a[contains(text(),"Your Feed")]').should('be.visible');

        // Update Username
        uiIntegration.clickSettingsButton();
        uiIntegration.updateUsername(Data.Username);
        uiIntegration.clickUpdateSettings();
        cy.get('img').invoke('attr', 'alt').should('contain', Data.Username)

        // logout

        uiIntegration.clickSettingsButton();
        uiIntegration.clickLogoutButton();
        cy.xpath('(//h1)[1]').should('have.text', 'conduit');
        cy.xpath('(//p)[1]').should('have.text', 'A place to share your knowledge.');
    });
});