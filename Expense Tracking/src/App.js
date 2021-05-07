import React,{useState} from 'react';

import Expenses from './components/Expenses/Expenses';

import NewExpenses from './components/NewExpenses/NewExpenses'
import ExpenseFilter from'./components/Expenses/ExpenseFilter'
import { isRegExp } from 'util';

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

  const noexpenses =[
    {
      id: '',
      title: 'No Expense Found',
      amount:0,
      date: new Date(1999, 1, 1),
    }
  ]

  const[Expense,setExpense]=useState(expenses);

  const[filterExpense,setfilterExpense]=useState(expenses);



  let ModifyExpense=(data)=>{

      let localExpense=[...filterExpense,data]

  
   setExpense(localExpense)
   setfilterExpense(localExpense)

  }




  let yearfilterHandler=(yeardata)=>{

    console.log("Year selected " +yeardata)

    let localexpense= [...filterExpense]

   const newExpenses= localexpense.filter((data)=>{


    console.log(data.date.getFullYear().toString()===yeardata.toString())
    return data.date.getFullYear().toString()===yeardata.toString()


    })

    if(yeardata==='Select Year'){
      setExpense(noexpenses)

    } else{
      setExpense(newExpenses)
    }
 
   



  }

  return (
    <div>
      <NewExpenses onModifyExp={ModifyExpense}/>
      <h2>Let's get started!</h2>
      <ExpenseFilter onDate={filterExpense} onYear={yearfilterHandler}/>
      <Expenses items={Expense} />
    </div>
  );
}

export default App;
