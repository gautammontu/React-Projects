import React from 'react'
import foodimage from '../asserts/meals.jpeg';
import classes from '../Layout/Header.module.css'
import HeaderCartButton from '../Layout/HeaderCartButton'

export default function Header(props) {
    return (
        <>
        <header className={classes.header}>
         <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick}/>
        </header>
          <div className={classes['main-image']}>
             <img src={foodimage} alt="Table full of meals"/>
          </div>
        </>
    )
}
