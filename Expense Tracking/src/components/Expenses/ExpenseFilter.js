import React from 'react'
import './ExpenseFilter.css';
import '../UI/Card.css';
import ExpenseFilterDropDown from './ExpenseFilterDropDown'

export default function ExpenseFilter(props) {


    let date=[...props.onDate]
 

    let yearSelected=(year)=>{

        props.onYear(year)
       

        
    }

    



    return (
       


        <div className="filter">
            <p>Select By Filter</p>
            <ExpenseFilterDropDown onyear={date} onYearSelected={yearSelected}/>
        </div>
    )
}
