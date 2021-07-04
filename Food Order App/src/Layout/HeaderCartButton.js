import React,{useContext,useEffect,useState} from 'react'
import CartIcon from '../cart/CartIcon'
import classes from '../Layout/HeaderCartButton.module.css'
import Cartcontext from '../store/cart-context'


export default function HeaderCartButton(props) {

const cart= useContext(Cartcontext)
const [isHighlighted, setHighlighted] = useState(false)

    
const button= `${classes.button} ${ isHighlighted ? classes.bump : ''}`

   let localitem = cart.item

useEffect(()=>{
    //setHighlighted(false)
    console.log("use effect called")

    setTimeout(()=>{
        setHighlighted(false)
    },300)

    return ( ()=>{
        setHighlighted(true)
        console.log("clean called ")
    }

       
       
    )
},[localitem])

       

          
    return (
        <button className={ button} onClick={cart.cartvisiblefun}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span >Your Cart</span>
            <span className={classes.badge}>{cart.totalItem}</span>
        </button>
    )
}
