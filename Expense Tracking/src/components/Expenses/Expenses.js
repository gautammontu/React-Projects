import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  let expense=[...props.items]
  console.log("expense length "+expense.length)
  return (

    expense.map(value=>{

      return (
        <Card className="expenses"   key={value.id}>
      <ExpenseItem
        title={value.title}
        amount={value.amount}
        date={value.date}
      />
       </Card>
      )
    }
    )
    
  );
}

export default Expenses;
