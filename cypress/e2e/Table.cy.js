describe('Table Component', () => {
  beforeEach(() => {
    cy.wait(100);
  });
  // it('should enter edit mode', () => {
  //   cy.visit('iframe.html?id=components-table--primary');
  //   cy.get('#root')
  //     .get('[channel="table:one"]')
  //     .shadow()
  //     .find('[slot="footer"]')
  //     .find('.button-edit')
  //     .click();
  //   cy.get('#root')
  //     .get('[channel="table:one"]')
  //     .shadow()
  //     .find('[slot="content"]')
  //     .find('tbody')
  //     .find('tr')
  //     .find('td')
  //     .find('in-input')
  //     .should('exist');
  // });

  // it('should edit a text field', () => {
  //   cy.visit('iframe.html?id=components-table--primary');
  //   cy.get('#root')
  //     .get('[channel="table:one"]')
  //     .shadow()
  //     .find('[slot="footer"]')
  //     .find('.button-edit')
  //     .click();
  //   cy.get('#root')
  //     .get('[channel="table:one"]')
  //     .shadow()
  //     .find('[slot="content"]')
  //     .find('tbody')
  //     .find('tr')
  //     .first()
  //     .find('td')
  //     .first()
  //     .find('in-input')
  //     .click()
  //     .shadow()
  //     .find('input')
  //     .clear();
  //   cy.get('#root')
  //     .get('[channel="table:one"]')
  //     .shadow()
  //     .find('[slot="content"]')
  //     .find('tbody')
  //     .find('tr')
  //     .first()
  //     .find('td')
  //     .first()
  //     .find('in-input')
  //     .click()
  //     .shadow()
  //     .find('input')
  //     .type('jane@doe.com');

  //   cy.get('#root')
  //     .get('[channel="table:one"]')
  //     .shadow()
  //     .find('[slot="content"]')
  //     .find('tbody')
  //     .find('tr')
  //     .first()
  //     .find('td')
  //     .eq(2)
  //     .find('in-input')
  //     .click();

  //   cy.wait(1000);

  //   cy.get('#root')
  //     .get('[channel="table:one"]')
  //     .shadow()
  //     .find('[slot="footer"]')
  //     .find('.button-save')
  //     .click();

  //   cy.wait(1000);

  //   cy.get('#root')
  //     .get('[channel="table:one"]')
  //     .shadow()
  //     .find('[slot="content"]')
  //     .find('tbody')
  //     .find('tr')
  //     .first()
  //     .find('td')
  //     .first()
  //     .find('span')
  //     .contains('jane@doe.com');
  // });

  // it('should cancel edit mode', () => {
  //   cy.visit('iframe.html?id=components-table--primary');

  //   cy.get('#root')
  //     .get('[channel="table:one"]')
  //     .shadow()
  //     .find('[slot="footer"]')
  //     .find('.button-edit')
  //     .click();

  //   cy.get('#root')
  //     .get('[channel="table:one"]')
  //     .shadow()
  //     .find('[slot="content"]')
  //     .find('tbody')
  //     .find('tr')
  //     .first()
  //     .find('td')
  //     .first()
  //     .find('in-input')
  //     .click()
  //     .shadow()
  //     .find('input')
  //     .clear();

  //   cy.get('#root')
  //     .get('[channel="table:one"]')
  //     .shadow()
  //     .find('[slot="content"]')
  //     .find('tbody')
  //     .find('tr')
  //     .first()
  //     .find('td')
  //     .first()
  //     .find('in-input')
  //     .click()
  //     .shadow()
  //     .find('input')
  //     .type('jane@doe.com');

  //   cy.get('#root')
  //     .get('[channel="table:one"]')
  //     .shadow()
  //     .find('[slot="footer"]')
  //     .find('.button-cancel')
  //     .click();

  //   cy.get('#root')
  //     .get('[channel="table:one"]')
  //     .shadow()
  //     .find('[slot="content"]')
  //     .find('tbody')
  //     .find('tr')
  //     .first()
  //     .find('td')
  //     .first()
  //     .find('span')
  //     .contains('joe@gmail.com');
  // });
});
