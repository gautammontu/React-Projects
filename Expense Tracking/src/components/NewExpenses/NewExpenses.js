import React from 'react'
import  NewExpenseForm from './NewExpenseForm'
import "./NewExpense.css"


export default function NewExpenses(props) 

{


let NewExpensesSave=(expense)=>{

let localexpense={
  ...expense,
  id:Math.random()
}
props.onModifyExp(localexpense);
}



    return (
          <div className="new-expense">
            <NewExpenseForm  onExpenseSave={NewExpensesSave} />
            </div>
        
    )
}
