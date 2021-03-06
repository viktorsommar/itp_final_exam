describe('user can get a message', () => {

    before(() => {
        cy.visit('http://localhost:3001')
    })

    it('by clicking the "Press me" button', () => {
        cy.get('#message').should('not.be.visible')
        cy.get('#quote').click()
        cy.get('#message').should('be.visible')
    })

    it('displays hello how are you message', () =>{
        cy.get('#message').should('contain', 'hello how are you')
    })
})