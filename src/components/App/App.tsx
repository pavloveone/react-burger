import React from 'react';
import '../../App.css';

import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { Modal } from '../modal/modal';
import { OrderDetails } from '../order-details/order-details';


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


  const [isVisible, setIsVisible] = React.useState(false)

  function handleOpen() {
      setIsVisible(true);
  };

  function handleClose() {
      setIsVisible(false);
  };


  return (
    <div className="App">
      <AppHeader />
      { state.data.length && (
        <div className="content">
          <BurgerIngredients onOpen={handleOpen} data={state.data} />
          <BurgerConstructor onOpen={handleOpen} data={state.data} />
        </div>
      )}
      <Modal isVisible={isVisible} onClose={handleClose}>
        <OrderDetails />
      </Modal>
    </div>
  );
}

export default App;
