// тестовые данные, для тестирования редьюсеров
export const user = {
    username: 'user',
    email: 'email@email.ru',
    password: 'password',
    success: true
};
export const newUser = {
    username: 'user',
    email: 'email@email.ru',
    password: 'password',
};
export const order = [
    {
        _id: '12345',
        ingredients: [
            'ingredient-1', 'ingredient-2', 'ingredient-3'
        ],
        status: 'done',
        name: 'burger',
        createdAt: 'created',
        updateAt: 'update'
    }
];
export const orders = {
    total: 10,
    totalToday: 5,
    orders : order
};
export const orderNumber = 1;
export const ingredients = [
    {
        _id: '1324',
        name: 'bunbunbun',
        type: 'main',
        proteins: 11,
        fat: 23,
        carbohydrates: 42,
        calories: 14,
        price: 55,
        image: 'imageimage',
        image_large: 'imageimageimageimage',
        image_mobile: 'imageimagemobil',
    }
];
export const bun = [
    {
        _id: '1324',
        name: 'bunbunbun',
        type: 'bun',
        proteins: 11,
        fat: 23,
        carbohydrates: 42,
        calories: 14,
        price: 55,
        image: 'imageimage',
        image_large: 'imageimageimageimage',
        image_mobile: 'imageimagemobil',
    }
];
export const statusMessages = {
    connecting: 'Connecting...',
    online: 'Online',
    offline: 'Offline'
};
export const errorMessage = 'Error';

// селекторы для cypress
export const ingredientSelector = '[data-testid=ingredient]';
export const dropBoxSelector = '[data-testid=drop_box]';
export const buttonSelector = '[data-testid=button]';

// переменные для cypress
export const email = 'pavloveone@yandex.ru';
export const password = '12345';