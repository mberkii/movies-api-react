describe('The Home Page', () => {
	it('successfully loads', () => {
		cy.visit('/')
		//tests counter
		cy.get('button').eq(0).click()
		cy.get('span').should('have.text', '1')
		cy.get('button').eq(1).click()
		cy.get('span').should('have.text', '0')
		//tests search form by pressing enter
		cy.get('input').clear().type('new query{enter}')
		cy.get('p').eq(1).should('have.text', 'new query')
		//tests search form by pressing submit button
		cy.get('input').type('newer query')
		cy.get('button[type="submit"]').click()
		cy.get('p').eq(1).should('have.text', 'newer query')
		//tests genre select
		cy.get('a[data-name="crime"]').click()
		cy.get('a[data-name="crime"]').should('have.class', 'active')
	})
})
