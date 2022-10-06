import MobileNavigationComponent from '../page-objects/components/MobileNavigationComponent'

describe('Testing MobileNavigationComponent links', () => {
	before(() => {
		cy.viewport('iphone-x')
		cy.visit('/')
	})

	it('Should check all links go to the right places', () => {
		MobileNavigationComponent.elements
			.mobileAboutMeLink()
			.should('have.attr', 'href', '#about-me')
		MobileNavigationComponent.elements
			.mobileSkillsLink()
			.should('have.attr', 'href', '#skills')
		MobileNavigationComponent.elements
			.mobileProjectsLink()
			.should('have.attr', 'href', '#projects')
		MobileNavigationComponent.elements
			.mobileContactMeLink()
			.should('have.attr', 'href', '#contact-me')
	})
})
