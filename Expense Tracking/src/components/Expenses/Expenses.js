import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  let expense=[...props.items]
  console.log("expense length "+expense.length)

  


  let expenseData=expense.map((value)=>{

    return (
      
      <ExpenseItem
      key ={value.id}
      title={value.title}
      amount={value.amount}
      date={value.date}
    />
   
    )
  }
  )

  return (
    <Card className="expenses" >
    {expenseData}
    </Card>
    
  );
}

export default Expenses;
