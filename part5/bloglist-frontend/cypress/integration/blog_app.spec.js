describe('Blog app', function() {

    beforeEach(function(){
        cy.visit('http://localhost:3000')
    })

    it('front page can be opened', function() {
       cy.contains('log in')
    })
    
    it('user can login', function(){
        cy.get('#inputUsername').type('Johnny')
        cy.get('#inputPassword').type('helloThere')
        cy.contains('login').click()
        cy.contains('Johnny logged in')
    })
  })