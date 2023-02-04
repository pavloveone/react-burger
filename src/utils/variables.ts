// variable check to response
export const checkReponse = <T>(res: Response) :Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };
//функция нахождения уникальных элементов массива
export const unique = (arr : Array<String>) => {
    return Array.from(new Set(arr));
}