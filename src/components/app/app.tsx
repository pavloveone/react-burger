import React from 'react';
import { useDispatch, useSelector } from '../../services/hooks/hooks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import styles from './app.module.css';

import { getUser } from '../../services/actions/profile';

import { AppHeader } from '../app-header/app-header';
import { fetchIngredients } from '../../services/actions/ingredients';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { Loading } from '../loading/loading';
import { ErrorLoading } from '../error-loading/error-loading';
import { Login } from '../../pages/login/login'
import { Register } from '../../pages/register/register';
import { ForgotPassword } from '../../pages/forgot-password/forgot-password';
import { ResetPassword } from '../../pages/reset-password/reset-password';
import { Profile } from '../../pages/profile/profile';
import { OrdersPage } from '../../pages/orders-page/orders-page';
import { NotFound404 } from '../../pages/not-found-404/not-found-404';
import { ProtectedRoute } from '../protected-route/protected-route';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { Modal } from '../modal/modal';
import { Location } from 'history';
import { Feed } from '../../pages/feed/feed';
import { OrderInfo } from '../order-info/order-info';
import { UserOrderInfo } from '../user-order-info/user-order-info';

type TLocataionState = {
  background: Location
}

function App(): JSX.Element {

  const { ingredients, isLoading, hasError } = useSelector((state) => state.ingredients);
  const { orders } = useSelector((state) => state.feed);
  const { userOrders } = useSelector((state) => state.orders);

  const location = useLocation<TLocataionState>();
  const history = useHistory();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    history.goBack();
  };  
  
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchIngredients())
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getUser()) 
  },[]);
  
  return (
    <div className={styles.app}>
      <AppHeader />
        <div className="content">
          {isLoading && (
              <Loading />
            )}
            {hasError && (
              <ErrorLoading />
            )}
            {!isLoading && !hasError && ingredients.length > 0 && (
              <Switch location={background || location}>
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
                <Route path="/feed" exact>
                  <Feed />
                </Route>
                <Route path='/ingredients/:ingredientId' exact>
                  <IngredientDetails />
                </Route>
                <Route path='/feed/:feedNumber' exact>
                  <OrderInfo />
                </Route>
                <Route path='/orders/:orderNumber' exact>
                  <UserOrderInfo />
                </Route>
                <Route>
                <NotFound404 />
                  </Route>
              </Switch>
          )}
        </div>
        {background && ingredients.length > 0 && (
        <Route
          path='/ingredients/:ingredientId'
          children={
            <Modal onClose={handleModalClose} header={'Детали ингредиента'}>
              <IngredientDetails />
            </Modal>
          }
        />
      )}
      {background && orders && (
      <Route
        path='/feed/:feedNumber'
        children={
          <Modal onClose={handleModalClose}>
            <OrderInfo />
          </Modal>
        }
      />
      )}
      {background && userOrders && (
      <Route
        path='/orders/:orderNumber'
        children={
          <Modal onClose={handleModalClose}>
            <UserOrderInfo />
          </Modal>
        }
      />
      )}
    </div>
  );
}


export default App;
