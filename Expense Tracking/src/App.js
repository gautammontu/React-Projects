import React,{useState} from 'react';

import Expenses from './components/Expenses/Expenses';

import NewExpenses from './components/NewExpenses/NewExpenses'

const App = () => {




  const expenses = [
    {
      id: '1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: '2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: '3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: '4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const[Expense,setExpense]=useState(expenses);



  let ModifyExpense=(data)=>{

      let localExpense=[...Expense,data]

  
   setExpense(localExpense)

  }


  return (
    <div>
      <NewExpenses onModifyExp={ModifyExpense}/>
      <h2>Let's get started!</h2>
      <Expenses items={Expense} />
    </div>
  );
}

export default App;
