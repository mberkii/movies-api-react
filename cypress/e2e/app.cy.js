describe('The Home Page', () => {
	it('successfully loads', () => {
		cy.visit('/')
		//tests search form by pressing enter
		cy.get('input').type('family{enter}')
		cy.url().should('include', '?query=family')
		cy.get('.movie-tile').eq(0).contains('Addams Family Values')
		//tests genre select
		cy.get('a[data-name="crime"]').click()
		cy.url().should('include', '?sortBy=title&searchBy=genres&genre=crime')
		cy.get('a[data-name="crime"]').should('have.class', 'active')
		cy.get('.main').contains('498 movies found')
		//tests sort select
		cy.get('select').select('release_date')
		cy.url().should('include', '?sortBy=release_date&searchBy=genres&genre=crime')
		cy.get('.main').contains('1941')
	})
})
