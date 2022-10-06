class HeaderComponent {
	elements = {
		logoLink: () => cy.get('[data-cy="logo-link"]'),
		aboutLink: () => cy.get('[data-cy="aboutme-link"]'),
		skillsLink: () => cy.get('[data-cy="skills-link"]'),
		projectsLink: () => cy.get('[data-cy="projects-link"]'),
		contactMeLink: () => cy.get('[data-cy="contactme-link"]'),
	}

	clickLogoLink() {
		this.elements.logoLink().click()
	}

	clickAboutLink() {
		this.elements.aboutLink().click()
	}

	clickSkillsLink() {
		this.elements.skillsLink().click()
	}

	clickProjectsLink() {
		this.elements.projectsLink().click()
	}

	clickContactMeLink() {
		this.elements.contactMeLink().click()
	}
}

module.exports = new HeaderComponent()
