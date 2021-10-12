describe('Blog app', function() {

    beforeEach(function(){
        cy.visit('http://localhost:3000')
    })

    it('front page can be opened', function() {
       cy.contains('log in')
    })
    describe('login',function(){
        it('succeeds with correct credentials', function(){
            cy.get('#inputUsername').type('Johnny')
            cy.get('#inputPassword').type('helloThere')
            cy.get('#loginButton').click()
            cy.contains('Johnny logged in')
        })

        it('fails with wrong credentials',function(){
            cy.get('#inputUsername').type('Johnny')
            cy.get('#inputPassword').type('secretOnly')
            cy.get('#loginButton').click()
            cy.get('.error')
            .should('contain','wrong password or username')
            .and('have.css','color','rgb(255, 0, 0)')
            
        })


    })
   
  })