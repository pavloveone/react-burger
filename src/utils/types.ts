export type TIngredient = {
  _id: string,
  id?: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_large: string,
  image_mobile: string,
};

export type TUser = {
  username?: string,
  email?: string,
  password?: string,
  token?: string,
};