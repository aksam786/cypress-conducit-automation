const tData = require('../../fixtures/testData')

describe("API Testing of conducit", () => {

    before(() => {
        cy.login();
        cy.saveLocalStorage();
      });
      
      beforeEach(() => {
        cy.restoreLocalStorage();
      });

    it("POST REQUEST FOR SIGN IN", () => {
        cy.request('POST', 'http://localhost:3000/api/users/login', {user: {email: "test@test.com", password: "testing"}})
        .then((response) => {
            expect(response.status).equals(200);
            expect(response.body.user).to.have.property('email', 'test@test.com');
        })
    });

    it("POST REQUEST FOR SIGN UP", () => {
        cy.request('POST', 'http://localhost:3000/api/users', {user: {username: tData.Username , email: tData.Email, password: "testing"}})
        .then((response) => {
            expect(response.status).equals(200)
            expect(response.body.user).to.have.property('email', tData.Email);
        })
    })

    it("GET REQUEST FOR TAGS", () => {
        cy.request('http://localhost:3000/api/tags')
        .then((response) => {
            expect(response.status).equals(200)
        })
    })
})