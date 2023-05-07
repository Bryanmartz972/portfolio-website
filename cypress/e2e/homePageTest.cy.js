import HomePage from '../page-objects/pages/HomePage'

describe('Testing HomePage page', () => {
	before(() => {
		cy.visit('/')
	})

  beforeEach(() => {
		cy.viewport('macbook-11')
  })

	it('Hero section should be visible', () => {
		HomePage.elements
			.heroTitle()
			.should('be.visible')
			.and('exist')
			.and('contain', 'Bryan Samuel Martínez')
		HomePage.elements
			.heroResumeButton()
			.should('be.visible')
			.and('exist')
			.and('have.attr', 'href')
	})

	it('About me section should be visible', () => {
		HomePage.elements.aboutmeTitle().should('be.visible').and('exist')
		HomePage.elements
			.aboutmeLinkedInLink()
			.should('be.visible')
			.and('exist')
			.and('have.attr', 'href', '#contact-me')
		HomePage.elements
			.aboutmeGithubLink()
			.should('be.visible')
			.and('exist')
			.and('have.attr', 'href', '#contact-me')
	})

	it('Skills section should be visible', () => {
		HomePage.elements.skillsTitle().should('be.visible').and('exist')
	})

	it('Projects section should be visible', () => {
		HomePage.elements.projectsTitle().should('be.visible').and('exist')
	})

	it('Contact me section should be visible', () => {
		HomePage.elements.contactmeTitle().should('be.visible').and('exist')
		HomePage.elements
			.contactmeLinkedInLink()
			.should('be.visible')
			.and('exist')
			.and('have.attr', 'href', 'https://www.linkedin.com/in/thebryanmartinez/')
		HomePage.elements
			.contactmeGithubLink()
			.should('be.visible')
			.and('exist')
			.and('have.attr', 'href', 'https://github.com/thebryanmartinez')

		HomePage.elements
			.contactmeEmailLink()
			.should('be.visible')
			.and('exist')
			.and('have.attr', 'href', 'mailto:bryanmartz972@gmail.com')
	})
})
