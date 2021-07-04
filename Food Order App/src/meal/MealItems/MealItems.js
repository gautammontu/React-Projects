

import React from 'react';
import classes from './MealItem.module.css'
import MeatItemForm from '../MealItems/MealsItemForm'


const MealItems =(props)=>{

    const price=`$${props.price.toFixed(2)}`;

return (<li className={classes.meal}>

        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>

        </div>
        <div>
            <MeatItemForm id={props.id} item={props}/>

        </div>


 </li>)

}


export default MealItems;