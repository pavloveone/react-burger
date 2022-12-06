import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import { checkUserAuth } from '../../services/actions/login';

import { AppHeader } from '../app-header/app-header';
import { fetchIngredients } from '../../services/actions/ingredients';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { Loading } from '../loading/loading';
import { ErrorLoading } from '../error-loading/error-loading';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { ResetPassword } from '../pages/reset-password/reset-password';
import { Profile } from '../pages/profile/profile';
import { OrdersPage } from '../pages/orders-page/orders-page';
import { NotFound404 } from '../pages/not-found-404/not-found-404';
import { ProtectedRoute } from '../protected-route/protected-route';

function App() {

  const { ingredients, isLoading, hasError } = useSelector((state) => state.ingredients);
  const { isAuth } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(checkUserAuth())
  },[isAuth])
  
  return (
    <div className="App">
      <AppHeader />
        <div className="content">
          {isLoading && (
              <Loading />
            )}
            {hasError && (
              <ErrorLoading />
            )}
            {!isLoading && !hasError && ingredients.length > 0 && (
              <Switch>
                <Route path="/" exact>
                  <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                  </DndProvider>
                </Route>
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
                <ProtectedRoute path="/profile" exact>
                  <Profile />
                </ProtectedRoute>
                <Route path="/orders" exact>
                  <OrdersPage />
                </Route>
                <Route>
                <NotFound404 />
                  </Route>
              </Switch>
          )}
        </div>
    </div>
  );
}


export default App;
