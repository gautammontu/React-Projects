import React,{useRef,useImperativeHandle} from 'react'
import classes from '../Input/Input.module.css'

 const Input=  React.forwardRef((props,ref)=> {

    let input=useRef();

   let active=()=>{

    input.current.focus();
   }

   useImperativeHandle(ref,()=>{

    return{intfocus:active}
   })


    return (
        <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.htmlName}>{props.label}</label>
          <input
            ref={input}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.emailChangeHandler}
            onBlur={props.validateEmailHandler}
          />
        </div>
    )
})

export default Input;