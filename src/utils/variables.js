// variable url with burger's data
export const burgerApiUrl = 'https://norma.nomoreparties.space/api/ingredients';
// variable check to response
export const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };