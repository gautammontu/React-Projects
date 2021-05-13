import React from 'react'

import styles from '../Component/InvalidInput.module.css'

export default function InvalidInput(props) {


    let okHandler=()=>{


        props.onOKClick();
    }
    return (
        <div className={styles.modal}>
          <div className={styles.errormsg}>
        
            <p className={styles.par}>Invalid Input</p>

             <section>
               
                <div className={styles.errorTxt} >{props.onErrormsg}</div>
                <button onClick={okHandler} id="okButton" >Okay</button>
             </section>
            </div> 
        </div>
    )
}
