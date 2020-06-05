describe('user can click button', () => {
    it('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#quote').click()
    })
})