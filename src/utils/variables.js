import  propTypes  from 'prop-types';


// variable url with burger's data
export const BURGER_API_URL = 'https://norma.nomoreparties.space/api';
// variable check to response
export const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };
// variable propTypes
export const ingredientTypes = propTypes.shape({
  _id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.oneOf(["bun", "main", "sauce"]).isRequired,
  proteins: propTypes.number.isRequired,
  fat: propTypes.number.isRequired,
  carbohydrates: propTypes.number.isRequired,
  calories: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  image: propTypes.string.isRequired,
  image_large: propTypes.string.isRequired,
  image_mobile: propTypes.string.isRequired,
});