import React, { useState,useEffect,useReducer,useContext,useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AutContext from '../context/Auth-context'
import Input from '../UI/Input/Input'



let reduceremail=(state,action)=>{
  if(action.type==='USERT_INPUT'){

    return ({value: action.val,isValid:action.val.includes('@')})
  } if(action.type==='USER_VALIDATE'){
    return ({value: state.value,isValid:state.value.includes('@')})

  }


}


let reducerpassword=(state,action)=>{
  if(action.type==='USERT_INPUT'){

    return ({value: action.val,isValid:action.val.trim().length > 6})
  } if(action.type==='USER_VALIDATE'){
    return ({value: state.value,isValid:state.value.trim().length > 6})

  }


}

const Login = (props) => {

  let userinput=useRef();
  let userpassword=useRef();
  const ctx=useContext(AutContext)
 // const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
 // const [enteredPassword, setEnteredPassword] = useState('');
 // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

 const[emailreducer,emaildispatcher] =useReducer(reduceremail,{value:'',isValid:''})
 const[passwordreducer,passworddispatcher] =useReducer(reducerpassword,{value:'',isValid:''})

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);

    emaildispatcher({type:"USERT_INPUT",val:event.target.value})
  /*
    setFormIsValid(
      event.target.value.includes('@') && passwordreducer.value.trim().length > 6
    );  */
  };

let{isValid:emailValid}=emailreducer

let{isValid:passwordValid}=passwordreducer

    useEffect(()=>{
      console.log("Useeffect validated");

      let identifer=setTimeout(()=>{
        console.log("Inside timeout");
        setFormIsValid(
          emailValid&& passwordValid
          
        );


      },500)  
  
  return ()=>{
    console.log("clean upcode");
    clearTimeout(identifer)
  }

},[emailValid,passwordValid])  

  
  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);

    passworddispatcher({type:"USERT_INPUT",val:event.target.value})
/*
    setFormIsValid(
      event.target.value.trim().length > 6 && emailreducer.value.includes('@')
    );   */
  };

  const validateEmailHandler = () => {

    emaildispatcher({type:"USER_VALIDATE"})
    //setEmailIsValid(enteredEmail.includes('@'));
    

    
  };

  const validatePasswordHandler = () => {
   // setPasswordIsValid(enteredPassword.trim().length > 6);

    passworddispatcher({type:"USER_VALIDATE"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
    ctx.onLogin(emailreducer.value, passwordreducer.value);

    } else if(!emailValid){
      userinput.current.intfocus()
    } else if(!passwordValid){
      userpassword.current.intfocus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>


      <Input 
          ref={userinput} isValid={emailreducer.isValid} htmlName={'email'} type={'email'} label={'E-Mail'}
       id={'email'} value={emailreducer.value} emailChangeHandler={emailChangeHandler} validateEmailHandler={validateEmailHandler}
      />
         <Input 
      ref={userpassword} isValid={passwordreducer.isValid} htmlName={'password'} type={'password'} label={'Password'}
       id={'password'} value={passwordreducer.value} emailChangeHandler={passwordChangeHandler} validateEmailHandler={validatePasswordHandler}
      />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
