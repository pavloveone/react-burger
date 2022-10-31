import React from 'react';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import '../../App.css';
import { AppHeader } from '../app-header/app-header';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="content">
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </div>
  );
}

export default App;
