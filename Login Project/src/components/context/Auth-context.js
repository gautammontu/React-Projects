import React,{useState,useEffect} from 'react'

const AutContext= React.createContext({
    isLoggedIn:false,
    onLogout:()=>{},
    onLogin:(email, password)=>{}
})


export const AutContextProvider=(props)=>{


    const islogin=localStorage.getItem('isLogIN')

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(()=>{
    if(islogin==='0'){
      setIsLoggedIn(true);

    }
  
      
  },[islogin])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);

    localStorage.setItem('isLogIN','0')
  };

  const logoutHandler = () => {

    localStorage.removeItem('isLogIN')
    setIsLoggedIn(false);
    
  };

return(<AutContext.Provider value={{ isLoggedIn:isLoggedIn,
    onLogout:logoutHandler,
    onLogin:loginHandler
   

}}>{props.children } 

</AutContext.Provider>)

}

export default AutContext;