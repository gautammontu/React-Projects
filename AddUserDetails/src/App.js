import React,{useState} from 'react';
import UserAddition from './Component/UserAddition'
import InvalidInput from './Component/InvalidInput'
import UserDetails from './Component/UserDetails'


function App() {


  const [userdetails,setUserdetails]=useState([{
    txt:"Gautam (32 years)",
    id:1
  },
  {
    txt:"Gayatri (27 years)",
    id:2
  }
])
const [isvalid,setisvalid]=useState(true)
const [errormsg,setErrormsg]=useState("Please enter valid data")





  

/* 
This method will take care of the error window and addedd user detail 
**/

  let updatedDetalilsHandler=(username,userage)=>{

    if(username.trim().length===0 && userage.trim().length===0) {
      setisvalid(false)
      setErrormsg("Please enter name and age")
    } else if(username.trim().length===0 && userage.trim().length>0){

      setisvalid(false)
      setErrormsg("Please enter name")

    } else if(username.trim().length>0 && userage.trim().length===0){

      setisvalid(false)
      setErrormsg("Please enter age")
    } else{

    let data=`${username} (${userage} years)` 
 
    console.log(data)

     let transformdata={
       txt:data,
       id:Math.random()
     }

    let localdata=[transformdata,...userdetails]

    setUserdetails(localdata);
    }
    
  }

  let errorClickHandler=()=>{

    setisvalid(true)

  }



  let deleteHandler=(id)=>{

    let data=[...userdetails]
    let mapvalue1=data.filter((ele)=>{
       

        
      return (ele.id !== id)

})
setUserdetails(mapvalue1);
  }

  return (
    <div>
  
    <UserAddition onUpdate={updatedDetalilsHandler} />
    
     {isvalid?<UserDetails onGoal={userdetails} onDelete={deleteHandler}/>: <InvalidInput onErrormsg={errormsg} onOKClick={errorClickHandler}/>}


    </div>
  );
}

export default App;
