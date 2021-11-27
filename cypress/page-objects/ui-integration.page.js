class UIIntegration {
    
    // locators 

    // ******** SIGN IN PAGE ***********

    SignInButton = 'a[href="/login"]';
    SignInEmail = 'input[placeholder="Email"]';
    SignInPassword = 'input[placeholder="Password"]';
    SignInSubmittButton = 'button[type="submit"]';

    // ******** SETTINGS PAGE ***********

    SettingsButton = 'a[href="/settings"]';
    UpdateSettingsButton = 'button[type="submit"]';
    UpdateUsername = 'input[placeholder="Username"]'
    LogoutButton = '//button[contains(text(),"Or click here to logout.")]';

    // ********* GLOBAL FEED ***********

    HomeButton = '//a[contains(text(),"Home")]';
    GlobalFeedButton = '//a[contains(text(),"Global Feed")]';

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

    async clickSettingsButton() {
        await cy
        .get(this.SettingsButton)
        .should('be.visible')
        .click()
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

    async updateUsername(newUsername){
        await cy
        .get(this.UpdateUsername)
        .should('be.visible')
        .clear()
        .type(newUsername)
    }
};

module.exports.UIIntegration = UIIntegration;