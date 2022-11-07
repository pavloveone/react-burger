import  propTypes  from 'prop-types';


// variable url with burger's data
export const burgerApiUrl = 'https://norma.nomoreparties.space/api/ingredients';
// variable check to response
export const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };
// variable propTypes
export const ingredientTypes = propTypes.shape({
  id: propTypes.number.isRequired,
  calories: propTypes.number.isRequired,
  carbohydrates: propTypes.number.isRequired,
  fat: propTypes.number.isRequired,
  image: propTypes.string.isRequired,
  image_large: propTypes.string.isRequired,
  image_mobile: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  proteins: propTypes.number.isRequired,
  type: propTypes.string.isRequired
});