import HeaderComponent from '../page-objects/components/HeaderComponent'

describe('Testing HeaderComponent links', () => {
before(() => {
	cy.visit('/')
})

	it('Should check all links go to the right places', () => {
		HeaderComponent.elements.logoLink().should('have.attr', 'href', '#home')
		HeaderComponent.elements
			.aboutLink()
			.should('have.attr', 'href', '#about-me')
		HeaderComponent.elements
			.skillsLink()
			.should('have.attr', 'href', '#skills')
		HeaderComponent.elements
			.projectsLink()
			.should('have.attr', 'href', '#projects')
		HeaderComponent.elements
			.contactMeLink()
			.should('have.attr', 'href', '#contact-me')
	})
})
