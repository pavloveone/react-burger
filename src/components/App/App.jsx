import React from 'react';
import './App.css';

import { burgerApiUrl } from '../../utils/variables.js'
import { checkReponse } from '../../utils/variables.js';

import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';


function App() {



  const [state, setState] = React.useState({
    data: []
  });

  React.useEffect(() => {
    fetch(burgerApiUrl)
    .then(checkReponse)
    .then(data => setState({
      ...state,
      data: data.data
    }))
    .catch(err => console.log(`Произошла ошибка при загрузке данных, текст ошибки: ${err}`));
  }, []);

  const { data } = state;

  return (
    <div className="App">
      <AppHeader />
      { state.data.length > 0 && (
        <div className="content">
          <BurgerIngredients data={state.data} />
          <BurgerConstructor data={state.data} />
        </div>
      )}
    </div>
  );
}

export default App;
