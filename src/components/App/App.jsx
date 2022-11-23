import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { AppHeader } from '../app-header/app-header';
import { fetchIngredients } from '../../services/actions/ingredients';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { Loading } from '../loading/loading';
import { ErrorLoading } from '../error-loading/error-loading';
import { Login } from '../login/login';

function App() {

  const { ingredients, isLoading, hasError } = useSelector((state) => state.ingredients);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className="App">
      <AppHeader />
      <Router>
        <Switch>
            <Route path="/login">
            <Login />
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
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          )}
        </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
