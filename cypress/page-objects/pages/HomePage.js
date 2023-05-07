class HomePage {
	elements = {
		heroTitle: () => cy.get('[data-cy="hero-title"]'),
		heroResumeButton: () => cy.get('[data-cy="hero-resume-button"]'),
		aboutmeTitle: () => cy.get('[data-cy="aboutme-title"]'),
		aboutmeLinkedInLink: () => cy.get('[data-cy="aboutme-linkedin-link"]'),
		aboutmeGithubLink: () => cy.get('[data-cy="aboutme-github-link"]'),
		skillsTitle: () => cy.get('[data-cy="skills-title"]'),
		projectsTitle: () => cy.get('[data-cy="projects-title"]'),
		contactmeTitle: () => cy.get('[data-cy="contactme-title"]'),
		contactmeGithubLink: () => cy.get('[data-cy="contactme-github-link"]'),
		contactmeLinkedInLink: () => cy.get('[data-cy="contactme-linkedin-link"]'),
		contactmeEmailLink: () => cy.get('[data-cy="contactme-email-link"]'),
		contactmeNameInput: () => cy.get('[data-cy="contactme-name-input"]'),
		contactmeEmailInput: () => cy.get('[data-cy="contactme-email-input"]'),
		contactmeMessageInput: () => cy.get('[data-cy="contactme-message-input"]'),
		contactmeSendButton: () => cy.get('[data-cy="contactme-send-button"]'),
	}

	clickHeroResumeButton() {
		this.elements.heroResumeButton().click()
	}

	clickAboutmeLinkedInLink() {
		this.elements.aboutmeLinkedInLink().click()
	}

	clickAboutmeGithubLink() {
		this.elements.aboutmeGithubLink().click()
	}

	clickContactmeGithubLink() {
		this.elements.contactmeGithubLink().click()
	}

	clickContactmeLinkedInLink() {
		this.elements.contactmeLinkedInLink().click()
	}

	clickContactmeEmailLink() {
		this.elements.contactmeEmailLink().click()
	}

	typeContactmeNameInput(name) {
		this.elements.contactmeNameInput().type(name)
	}

	typeContactmeEmailInput(email) {
		this.elements.contactmeEmailInput().type(email)
	}

	typeContactmeMessageInput(message) {
		this.elements.contactmeMessageInput().type(message)
	}

	clickContactmeSendButton() {
		this.elements.contactmeSendButton().click()
	}
}

module.exports = new HomePage()
