class E2ETestPage {
    
    // locators 

    // ******* SIGN UP PAGE ***********

    SignUpButton = 'a[href="/register"]';
    SignUpUsername = 'input[placeholder="Username"]';
    SignUpEmail = 'input[placeholder="Email"]';
    SignUpPassword = 'input[placeholder="Password"]';
    SignUpSubmittButton = 'button[type="submit"]'

    // ******** SIGN IN PAGE ***********

    SignInButton = 'a[href="/login"]';
    SignInEmail = 'input[placeholder="Email"]';
    SignInPassword = 'input[placeholder="Password"]';
    SignInSubmittButton = 'button[type="submit"]';

    // ********* NEW ARTICLE TAG ********

    NewPostButton = 'a[href="/editor"]';
    ArticleTitle = 'input[placeholder="Article Title"]';
    WhatIsArticleAbout = `input[placeholder="What's this article about?"]`;
    ArticleText = 'textarea[placeholder="Write your article (in markdown)"]';
    Tags = 'input[placeholder="Enter tags"]';
    PublishArticle = 'button[type="button"]';

    // ******** SETTINGS PAGE ***********

    SettingsButton = 'a[href="/settings"]';
    ShortBio = 'textarea[placeholder="Short bio about you"]';
    UpdateSettingsButton = 'button[type="submit"]';
    LogoutButton = '//button[contains(text(),"Or click here to logout.")]';

    // ********* GLOBAL FEED ***********
    HomeButton = '//a[contains(text(),"Home")]';
    GlobalFeedButton = '//a[contains(text(),"Global Feed")]';
    Article = '(//a[h1])[1]';
    EditArticle = '//a[contains(text(),"Edit Article")]';
    DeleteArticle = '//button[contains(text(),"Delete Article")]';
    CommentSection = '//textarea[@placeholder="Write a comment..."]';
    PostCommentButton = '//button[contains(text(),"Post Comment")]';

    async clickSignUp(){
        await cy
        .get(this.SignUpButton)
        .should('be.visible')
        .click();
    };

    async fillUserName(username){
        console.log(username);
        await cy.get(this.SignUpUsername).type(username);
    }

    async fillSignUpEmail(email){
        await cy
        .get(this.SignUpEmail)
        .type(email, {force: true});
    }

    async fillSignUpPassword(password){
        await cy
        .get(this.SignUpPassword)
        .type(password);
    }

    async clickSignUpSubmitButton(){
        await cy
        .get(this.SignUpSubmittButton)
        .should('be.visible')
        .click();
    };

    async clickSignIn(){
        await cy
        .get(this.SignInButton)
        .should('be.visible')
        .click();
    };

    async fillSignInEmail(email){
        await cy
        .get(this.SignInEmail)
        .type(email);
    }

    async fillSignInPassword(password){
        await cy
        .get(this.SignInPassword)
        .type(password);
    }

    async clickSignInSubmitButton(){
        await cy
        .get(this.SignInSubmittButton)
        .should('be.visible')
        .click();
    };

    async clickNewPost() {
        await cy
        .get(this.NewPostButton)
        .should('be.visible')
        .click();
    }

    async fillArticleTitle(title) {
        await cy
        .get(this.ArticleTitle)
        .type(title)
    }

    async fillArticleAbout(aboutArticle) {
        await cy
        .get(this.WhatIsArticleAbout)
        .type(aboutArticle)
    }

    async fillArticleText(textOfArticle) {
        await cy
        .get(this.ArticleText)
        .clear()
        .type(textOfArticle)
    }

    async addTags(tag) {
        await cy
        .get(this.Tags)
        .type(tag)
    }

    async clickPublishArticle() {
        await cy
        .get(this.PublishArticle)
        .should('be.visible')
        .click()
    }

    async clickSettingsButton() {
        await cy
        .get(this.SettingsButton)
        .should('be.visible')
        .click()
    }

    async fillBio(shortBio) {
        await cy
        .get(this.ShortBio)
        .clear()
        .type(shortBio)
    }

    async clickUpdateSettings(){
        await cy
        .get(this.UpdateSettingsButton)
        .should('be.visible')
        .click()
    }

    async clickLogoutButton (){
        await cy
        .xpath(this.LogoutButton)
        .should('be.visible')
        .click()
    }

    async clickHomeButton() {
        await cy
        .xpath(this.HomeButton)
        .should('be.visible')
        .click()
    }

    async clickGlobalFeed() {
        await cy
        .xpath(this.GlobalFeedButton)
        .should('be.visible')
        .click()
    }

    async clickArticle() {
        await cy
        .xpath(this.Article)
        .should('be.visible')
        .click()
    }

    async clickEditArticle() {
        await cy
        .xpath(this.EditArticle)
        .should('be.visible')
        .click()
    }

    async clickDeleteArticle() {
        await cy
        .xpath(this.DeleteArticle)
        .should('be.visible')
        .click()
    }

    async fillCommentSection(comment){
        await cy
        .xpath(this.CommentSection)
        .clear()
        .type(comment)
    }

    async clickPostComment() {
        await cy
        .xpath(this.PostCommentButton)
        .should('be.visible')
        .click()
    }
};

module.exports.E2ETestPage = E2ETestPage;