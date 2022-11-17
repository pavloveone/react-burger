import React from 'react';
import './App.css';

import { burgerApiUrl } from '../../utils/variables.js'
import { checkReponse } from '../../utils/variables.js';

import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';

import { DataContext } from '../../contexts/data-context';


function App() {

  const [ingredients, setIngredients] = React.useState({
    data: []
  });

  React.useEffect(() => {
    fetch(burgerApiUrl)
    .then(checkReponse)
    .then(data => setIngredients({
      ...ingredients,
      data: data.data
    }))
    .catch(err => console.log(`Произошла ошибка при загрузке данных, текст ошибки: ${err}`));
  }, []);

  const { data } = ingredients;

  return (
    <div className="App">

      <AppHeader />
      { ingredients.data.length > 0 && (
        <div className="content">
          <DataContext.Provider value={{data}}>
            <BurgerIngredients/>
            <BurgerConstructor />
          </DataContext.Provider>
        </div>
      )}
    </div>
  );
}

export default App;
