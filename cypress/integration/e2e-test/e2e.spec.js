const {E2ETestPage} = require('../../page-objects/e2e-test.page');
const Data =  require('../../fixtures/testData');

describe("Sign In, create a new article, edit article, add comment, delete article and logout", async () => {
    Cypress.config('defaultCommandTimeout', 10000);
    const e2eTest = new E2ETestPage();
    beforeEach( () => {
        cy.visit("http://localhost:4100/");
    })
    it("Sign In and then Create a new post and then logout", () => {

        // Sign In
        e2eTest.clickSignIn();
        e2eTest.fillSignInEmail(Data.SignInEmail);
        e2eTest.fillSignInPassword(Data.SignInPassword);
        e2eTest.clickSignUpSubmitButton();

        // New Article
        e2eTest.clickNewPost();
        e2eTest.fillArticleTitle(Data.ArticleTitle);
        e2eTest.fillArticleAbout(Data.ArticleIsAbout);
        e2eTest.fillArticleText(Data.ArticleText);
        e2eTest.addTags(Data.Tags);
        e2eTest.clickPublishArticle();

        // Edit Article
        e2eTest.clickHomeButton();
        e2eTest.clickGlobalFeed();
        e2eTest.clickArticle();
        e2eTest.clickEditArticle();
        e2eTest.fillArticleText(Data.EditedArticleText);
        e2eTest.clickPublishArticle();
        cy.xpath('//div/p').should('have.text', Data.EditedArticleText)

        // Add Comment
        e2eTest.fillCommentSection(Data.Comment);
        e2eTest.clickPostComment();

        // Delete Article
        e2eTest.clickDeleteArticle();
        cy.url().should('eq', 'http://localhost:4100/')

        //logout
        e2eTest.clickSettingsButton();
        e2eTest.clickLogoutButton();
    });
});