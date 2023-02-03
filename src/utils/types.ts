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
  success?: string,
  user?: any
};

export type TResponse = TUser & { success: string };

type TCredentials = {
   accessToken: string, 
   refreshToken: string
}

export type TIngredientResponse = TIngredient & {data: TIngredient[]}

export type TRegisterResponse = TResponse & TCredentials & { user: Omit<TUser, "password"> };

export type TCreatedOrder = {
   number: number;
}

export type TOrderResponse = TResponse & {
  name: string, 
  order: TCreatedOrder,
}
export type TOrderInfo = {
  _id: string;
  ingredients: Array<String>;
  status: string;
  name: string;
  number: string;
  createdAt: string;
  updatedAt: string;
}

export type TOrders = {
  orders: Array<TOrderInfo>;
  total?: number;
  totalToday?: number;
}