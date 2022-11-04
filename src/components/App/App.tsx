import React from 'react';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import '../../App.css';
import { AppHeader } from '../app-header/app-header';
import { useEffect } from 'react';

function App() {

  const url = 'https://norma.nomoreparties.space/api/ingredients';

  const [state, setState] = React.useState({
    data: []
  });

  React.useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setState({
      ...state,
      data: data.data
    }))
    .catch(err => console.log(`Произошла ошибка при загрузке данных, текст ошибки: ${err}`));
  }, []);

  const { data } = state;
  console.log(`posle montirovaniya: ${state.data}`);
  return (
    <div className="App">
      <AppHeader />
      { state.data.length && (
        <div className="content">
          <BurgerIngredients  data={state.data} />
          <BurgerConstructor data={state.data} />
        </div>
      )}
    </div>
  );
}

export default App;
