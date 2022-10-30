import React from 'react';
import { BurgerIngredients } from './components/burger-ingredients/burger-ingredients';
import { BurgerConstructor } from './components/burger-constructor/burger-constructor';
import './App.css';
import { AppHeader } from './components/app-header/app-header';

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
