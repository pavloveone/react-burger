import '@4tw/cypress-drag-drop';

describe('service is available and app works correctly with routers', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000');
  });

  it('should open homepage by default', function() {
    cy.contains('Соберите бургер');
  });

  it('should open and close ingredient details', function() {
    cy.get('[data-testid=ingredient]').first().as('ingredient');
    cy.get('@ingredient').click();
    cy.contains('Детали ингредиента');
    cy.get('[data-testid=close]').click();
    cy.contains('Соберите бургер');
  });

  it('should drag any ingredient and drop to container and logIn', function() {

    const email = 'pavloveone@yandex.ru';
    const password = '12345';

    cy.get('[data-testid=ingredient]')
    .first()
    .drag('[data-testid=drop_box]');
    cy.get('[data-testid=ingredient]')
    .last()
    .drag('[data-testid=drop_box]')
    cy.get('[data-testid=button]').click();
    cy.get('[data-testid=email_input]').type(`${email}{enter}`);
    cy.get('[data-testid=password_input]').type(`${password}{enter}`);
    cy.get('[data-testid=button]').click();
    cy.contains('Передаем заказ на кухню. Пожалуйста, подождите');
  });

  });