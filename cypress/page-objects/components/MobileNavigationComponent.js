class MobileNavigationComponent {
	elements = {
		mobileNavigationContainer: () =>
			cy.get('[data-cy="mobile-navigation-container"]'),
		mobileAboutMeLink: () => cy.get('[data-cy="mobile-aboutme-link"]'),
		mobileSkillsLink: () => cy.get('[data-cy="mobile-skills-link"]'),
		mobileProjectsLink: () => cy.get('[data-cy="mobile-projects-link"]'),
		mobileContactMeLink: () => cy.get('[data-cy="mobile-contactme-link"]'),
	}

	clickMobileAboutMeLink() {
		this.elements.mobileAboutMeLink().click()
	}

	clickMobileSkillsLink() {
		this.elements.mobileSkillsLink().click()
	}

	clickMobileProjectsLink() {
		this.elements.mobileProjectsLink().click()
	}

	clickMobileContactMeLink() {
		this.elements.mobileContactMeLink().click()
	}
}

module.exports = new MobileNavigationComponent()
