import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

import './App.css';

import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { fetchBurgerIngredients } from '../../services/burger-ingredients-slice';
import { Loading } from '../loading/loading';
import { ErrorLoading } from '../error-loading/error-loading';

function App() {

  const { ingredients, isLoading, hasError } = useSelector((state) => state.ingredients);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchBurgerIngredients());
  }, []);

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
            <>
              <BurgerIngredients/>
              <BurgerConstructor />
            </>
          )}
        </div>
    </div>
  );
}

export default App;
