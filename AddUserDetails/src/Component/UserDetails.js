import React from 'react'
import styles from '../Component/UserDetails.module.css'

export default function UserDetails(props) {



    let data=[...props.onGoal]
    

       let  mapvalue= data.map(val=>{
        
           return( <p key={val.id} onClick={()=>deleteHandler(val.id)} >{val.txt}</p>)
           

       })
    

       
       let deleteHandler=(id)=>{

        props.onDelete(id)
       }



    return (

        <div className={styles.section}>

        <section className={styles.userDetails}>
         {mapvalue}



        </section>

        </div>    
       
    )
}
