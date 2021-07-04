

import React,{useState,useContext,useRef} from 'react';

import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

import Cartcontext from '../../store/cart-context'

const MeatItemForm= (props)=>{

    const ctx=useContext(Cartcontext)
    const valueref=useRef();

    const[cartvalue,setCartValue]=useState('1');

    const dummyfun=(event)=>{

        console.log("onChange");

        setCartValue(event.target.value);
        

    }


const submitAddToCart=(event)=>{

    event.preventDefault();
    
    ctx.additem({id: props.item.id,
    name: props.item.name,
    description: props.item.description,
    price: props.item.price,
    amount: cartvalue       })
    console.log('Ref Value :'+valueref.current.value)



}

    return (<form className={classes.form} onSubmit={submitAddToCart}>
      <Input ref={valueref} label='Quantity'  input={{type:'number', id:`Quantity_${props.id}`,name:'Quantity',max:'5',min:'1',step:'1',value:cartvalue,onChange:dummyfun}}/>
      <button>+Add</button>


    </form>

    )
}

export default MeatItemForm;