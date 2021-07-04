import React,{useState} from 'react'
import classes from './Checkout.module.css';

const Checkout = (props) => {


   const[username,setName]=useState('')
   const[street,setStreet]=useState('')
   const[postalcode,setPostalCode]=useState('')
   const[city,setCity]=useState('')
   const[errormsg,setErrorMsg]=useState([])
  const[nameValid,setNameValid]=useState(false)
  const[streetValid,setStreetValid]=useState(false)
  const[postalcodevalid,setPostalCodeValid]=useState(false)
  const[cityvalid,setCityValid]=useState(false)
  

  let isFormValid= nameValid && streetValid && postalcodevalid && cityvalid
    


   //let formvalid= NameValid && StreetValid && PostalCodeValid && CityValid

    const confirmHandler =  async (event) => {
      event.preventDefault();

      
try {


     let data={
         name:username,
         street:street,
         postalcode:postalcode,
         city:city,
         Total:props.onTotal ,
         items: props.onCartItems
     }

     const response = await fetch("https://react-http-f3620-default-rtdb.firebaseio.com/order.json",{
         method:"POST",
         body: JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
     });
            
     const responsedata= response.json()



     if(!response.ok){

        throw new Error("Some Thing went Wrong!!")
     }

     setName("")
     setStreet("")
     setPostalCode("")
     setCity("")
     props.onOrderPlace()
     
    } catch(error){
        let lclerror=[error.message]
        setErrorMsg(lclerror)

    }


    };


    const nameBlureHandler=(event)=>{

        console.log("Value" +event.target.value)

        fieldValidate('Name',event.target.value)       

    }


    const streetBlureHandler=(event)=>{

        fieldValidate('Street',event.target.value)       

    }



    const postalBlureHandler=(event)=>{

        fieldValidate('PostalCode',event.target.value)       

    }


    const cityBlureHandler=(event)=>{

        fieldValidate('City',event.target.value)       

    }



    const fieldValidate=(field,value)=>{

        let errfield =`${field} is empty`
        if(value.trim().length===0){
     
           console.log(errormsg)
           
           if(!errormsg.includes(errfield)){

            let local=[...errormsg,errfield]
             
            setErrorMsg(local)
            
           }else{
               return
           }
        }
  


        switch(field){
        case 'Name':
            if(value.trim().length===0){
                setNameValid(false)
                setName(value)
            }else{
            setName(value)
            errormsgremover(errfield)
            setNameValid(true)
            }
            break
        case 'Street':
            if(value.trim().length===0){
                setStreetValid(false)
                setStreet(value)
             } else{  
                 setStreet(value)
            errormsgremover(errfield)
            setStreetValid(true)
            }
            break
        case 'PostalCode':
            if(value.trim().length===0)
            {
                setPostalCode(value)
                setPostalCodeValid(false)
            } else {
                setPostalCode(value)
                errormsgremover(errfield)
                setPostalCodeValid(true)
            }
            break 
        case 'City':
            if(value.trim().length===0){
                setCity(value)
                setCityValid(false)

            }else {
                setCity(value)
                 errormsgremover(errfield)
                 setCityValid(true)
            }
            break    
            
           
        default:
            
        }

        


    }

    const errormsgremover=(value)=>{

       let newdata= errormsg.filter((data)=> data !== value)

       setErrorMsg(newdata)
    }


  
    return (
      <form className={classes.form} onSubmit={confirmHandler}>
         <div> {errormsg.map((data,index)=>{

             return(<p className={classes.error} key={index}>{data}</p>)
         })} </div> 
         
        <div className={classes.control}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' onBlur={nameBlureHandler} onChange={nameBlureHandler} value={username} />
        </div>
        <div className={classes.control}>
          <label htmlFor='street'>Street</label>
          <input type='text' id='street' onBlur={streetBlureHandler} onChange={streetBlureHandler} value={street} />
        </div>
        <div className={classes.control}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='number' id='postal'  onBlur={postalBlureHandler} onChange={postalBlureHandler} value={postalcode}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city'  onBlur={cityBlureHandler} onChange={cityBlureHandler} value={city}/>
        </div>
        <div className={classes.actions}>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit} disabled={!isFormValid}>Confirm</button>
        </div>
        
      </form>
    );
  };
  

export default Checkout;
;