import React,{useState} from 'react'

export default function ExpenseFilterDropDown(props) {

let dropHandler=(event)=>{
    
  console.log(event.target.value)
    props.onYearSelected(event.target.value)

}


   let yeararray=props.onyear.map((val)=>{

    return val.date.getFullYear()
}
)



const[year,setYear]=useState(yeararray)

const uniqueSet = new Set(year);

let uniqueyear=[...uniqueSet]




let data =uniqueyear.map((val)=>{

    return (
        <option key={val} value={val}>{val}</option>
        
         )
    

    })

    



    return (
    <div>
        <select name="year" id="year" onChange={dropHandler} >
        <option  value='Select Year'>Select Year</option>   
        {data}
        </select>
    </div>
    
    )
        
    
}
