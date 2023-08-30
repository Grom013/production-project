import { selectByTestId } from '../helpers/selectByTestId';

describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Переход открывает на главную страницу', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Переход открывает несуществующий маршрут', () => {
            cy.visit('/fssdsfd');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Переход открывает на главную страницу', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Переход открывает на страницу со списком статьей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
