
import React,{useContext,useState} from 'react';
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../store/cart-context'
import CartItem from './CartItem'
import Checkout from '../Checkout/checkout';

const Cart=(props)=>{


    const cart =useContext(CartContext)
    const[readytoorder,setReadyToOrder]=useState(false)
    const [orderplaced,setOrderPlaced]=useState(false)

    const ordervisable=cart.item.length > 0;


    const removeHandler=(id)=>{

            console.log("id value"+id)
            cart.removeitem(id)

    }

    const addHandler=(item)=>{

        console.log("item value"+item.amount)


     let updateditem={
         ...item,
         amount:1
     }

        cart.additem(updateditem)

    }

const cartItems=  cart.item.map(ml=>{
    console.log("id "+ml.id)
      return <CartItem key={ml.id} name={ml.name} amount={ml.amount} price={ml.price} onRemove={removeHandler} id={ml.id} onAdd={addHandler.bind(null,ml)}/>
  }) 

const orderHandler=()=>{
   
    setReadyToOrder(true)
  

}


const orderplacedhandler=()=>{

    setOrderPlaced(true)
    cart.removeallitem()

}
const checkoutmodal= <Modal onClose={props.onClose}>
<div className={classes['cart-items']}>
    
    {cartItems}
    <div className={classes.total}>
    <span>Total Amount</span>
    <span>{`$${cart.totalprice}`}</span>

    </div>
</div>
<div className={classes.actions}>
 {!readytoorder  && <button className={classes['button--alt']} onClick={cart.carthide} >Close</button>  }
{ordervisable && !readytoorder  && <button className={classes.button} onClick={orderHandler}>Order</button>  }
</div>

{readytoorder && <Checkout onCancel={cart.carthide} onTotal={`$${cart.totalprice}`} onCartItems={cart.item} onOrderPlace={orderplacedhandler}/>}
</Modal>

  
    return(<div> 
        {orderplaced ? <Modal>Order Is Placed... </Modal>:checkoutmodal}
    </div>
    )
}

export default Cart;