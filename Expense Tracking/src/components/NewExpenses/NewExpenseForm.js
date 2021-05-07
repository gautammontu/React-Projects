import React, {useState} from 'react'
import './NewExpenseForm.css';
export default function NewExpenseForm(props) {

const [title,setTitle]= useState('');
const [amount,setAmount]= useState('');
const [date,setDate]= useState('');


let titleHandler=(e)=>{

    setTitle(e.target.value);
}

let amountHandler=(e)=>{

    setAmount(e.target.value);
}

let dateHandler=(e)=>{

    setDate(e.target.value);
    
}


let submitHandler=(event)=>{

    event.preventDefault();
   let expense={
    title: title,
    amount: amount,
    date: new Date(date),
   }

   props.onExpenseSave(expense)
   

   setTitle('');
   setAmount('');
   setDate('');

}


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
               
            <label for="Title">Title</label><br/>
            <input type="text" id="Title" name="Title" onChange={titleHandler} value={title}/><br/>
            <label for="Amount">Amount</label><br/>
            <input type="number" id="Amount" name="Amount"  onChange={amountHandler} value={amount}/><br/>
            <label for="Date">Date</label><br/>
            <input type="date" id="Date" name="Date" onChange={dateHandler} value={date}/><br/>


            <input type="submit" value="Submit"/><br/>
   
            </div> 
            </form> 
    )
    }