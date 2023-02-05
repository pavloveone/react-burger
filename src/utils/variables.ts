import { TIngredient } from "./types";

// variable check to response
export const checkReponse = <T>(res: Response) :Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };
//функция нахождения уникальных элементов массива
export const unique = (arr : Array<String>) => {
    return Array.from(new Set(arr));
}
//функция подсчета элементов
export const getCount = (array: Array<TIngredient>) => {
  const result = {} as any;
  array.forEach((object) => {
    const key = `${object._id}`;
    if(!result[key]) {
      result[key] = {...object, count: 0};
    }
    result[key].count += 1;
  });
  return Object.values(result);
}