import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import { AppHeader } from '../app-header/app-header';
import { fetchIngredients } from '../../services/actions/ingredients';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { Loading } from '../loading/loading';
import { ErrorLoading } from '../error-loading/error-loading';
import { Login } from '../login/login';
import { Register } from '../register/register';
import { ForgotPassword } from '../forgot-password/forgot-password';
import { ResetPassword } from '../reset-password/reset-password';
import { Profile } from '../profile/profile';
import { OrdersPage } from '../orders-page/orders-page';
import { NotFound404 } from '../not-found-404/not-found-404';

function App() {

  const { ingredients, isLoading, hasError } = useSelector((state) => state.ingredients);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className="App">
      <AppHeader />
        <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/forgot-password" exact>
              <ForgotPassword />
            </Route>
            <Route path="/reset-password" exact>
              <ResetPassword />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/orders" exact>
              <OrdersPage />
            </Route>
        <div className="content">
          {isLoading && (
            <Loading />
          )}
          {hasError && (
            <ErrorLoading />
          )}
          {!isLoading && !hasError && ingredients.length > 0 && (
            <DndProvider backend={HTML5Backend}>
            <Route path="/main" exact>
              <BurgerIngredients />
              <BurgerConstructor />
            </Route>
            </DndProvider>
          )}
        </div>
        <Route>
            <NotFound404 />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
