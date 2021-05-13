import React,{useState} from 'react'
import styles from '../Component/UserAddition.module.css'

export default function UserAddition(props) {

const [username,setUsername]= useState(" ");
const [userage,setUserage]= useState(" ");

    let submittHandler=(event)=>{
        event.preventDefault();


       // let inlinedata=`${username} (${userage} years)` 
          
        props.onUpdate(username,userage)

        setUsername("");
        setUserage("");
     
    }


    let nameHamdler=(event)=>{
        setUsername(event.target.value)

    }


    let ageHamdler=(event)=>{
        setUserage(event.target.value)

    }



    return (
        <div className={`${styles.form}`}>
            <form onSubmit={submittHandler}>
            <div className={styles.adduserform}>
               
            <label htmlFor="UserName">UserName</label>
            <input type="text" id="UserName" name="UserName" onChange={nameHamdler} value={username}/>
            <label htmlFor="Age">Age(in Years)</label>
            <input type="number" id="Age" name="Age"  onChange={ageHamdler} value={userage}/>
            
            <input className={styles.button} type="Submit" value='Add User'/>
   
            </div> 
            </form> 
        </div>
    )
}
