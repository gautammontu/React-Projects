
import React,{useState,useContext} from 'react';
import Header from './Layout/Header'
import Meals from '../src/meal/Meals'
import Cart from '../src/cart/Cart'

import Cartcontext from '../src/store/cart-context'


function App() {

  const cart= useContext(Cartcontext)

  return (

     
  <div>
     
      <Header/>
      <Meals/>
      {cart.cartvalue && < Cart/>}
      </div>

  
  
  );
}

export default App;
