


// ACTIONS
export const GET_DATA_API = 'GET_DATA_API';     // получение данных с апи
export const GET_INGREDIENTS = 'GET_INGREDIENTS';       // список всех полученных ингредиентов
export const CURRENT_INGREDIENTS = 'CURRENT_INGREDIENTS';       //список всех ингредиентов в текущем конструкторе бургера
export const SHOW_INGREDIENTS = 'SHOW_INGREDIENTS';     //объект текущего просматриваемого ингредиента
export const CREATE_ORDER = 'CREATE_ORDER';     //объект созданного заказа

const initialState = {
    data: []
};

//REDUCERS
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA_API: {
            return {
                ...state,
            };
        }
        case GET_INGREDIENTS: {
            return {
                ...state,
            };
        }
        case CURRENT_INGREDIENTS: {
            return {
                ...state,
            };
        }
        case SHOW_INGREDIENTS: {
            return {
                ...state,
            };
        }
        case CREATE_ORDER: {
            return {

            };
        }
        default: {
            return state;
        }
    }
}