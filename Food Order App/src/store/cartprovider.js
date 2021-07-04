import React,{useState,useReducer} from 'react';
import CartContext from './cart-context'




const reducermethod=(state,action)=>{

    if(action.type==='ADD'){

         let currentItemindex= state.item.findIndex(item=>item.id ===action.item.id
         ) 
         

         let currenItems;
         let updatedItems;
        if(currentItemindex >= 0){

            currenItems=[...state.item]

            updatedItems={
               ...currenItems[currentItemindex],
               amount: parseInt(action.item.amount)+parseInt(currenItems[currentItemindex].amount)
            }

                 
            currenItems[currentItemindex]=updatedItems;


        }else{
            currenItems = state.item.concat(action.item)

        }

     
        
        let price = parseFloat(state.total)+action.item.amount* parseFloat(action.item.price)


       return ({
           item:currenItems,
           total:price.toFixed(2)
       });
    }
    if(action.type==='REMOVE'){

        let currentItemindex= state.item.findIndex(item=>item.id ===action.id
            ) 
    
            let currenItems;
            let updatedItems;
            let newprice;
       

            currenItems=[...state.item]


            if(parseInt(currenItems[currentItemindex].amount)===1){

                newprice=state.total -  currenItems[currentItemindex].price
                currenItems.splice(currentItemindex,1)


            }else{

            

            updatedItems={
               ...currenItems[currentItemindex],
               amount: parseInt(state.item[currentItemindex].amount)-1
            }

                 
            currenItems[currentItemindex]=updatedItems;
             newprice=state.total -  currenItems[currentItemindex].price

        }
        

       


        return({
            item:currenItems,
           total:newprice.toFixed(2)
        })
    } else{

        return({
            item:[],
           total:0.00
        })
    }



}

const defaultReduser={
    item:[],
    total:0
}


const CartProvider=(props)=>{




    const [statereduser,dispatchReducer]=useReducer(reducermethod,defaultReduser)


    const[cartvisible,setCartVisible]=useState(false);



    const addItemHandler=(item)=>{
      
        dispatchReducer({type:'ADD',item:item})


              
    }

    const removeItemHandler=(id)=>{

        dispatchReducer({type:'REMOVE',id:id})
    }

    const cartVisableHandler=()=>{
        
        setCartVisible(true)
        
      }
      
      
      const cartHideHandler=()=>{
        console.log("hide handler")
        setCartVisible(false)
        
      }


      let totalitems=statereduser.item.reduce((accumulator, currentValue)=>{

        return accumulator+parseInt(currentValue.amount);
      },0)




      const remoAllItemHandler =()=>{

        dispatchReducer({type:'REMOVEALL'})

      }


const contextvalue={
    item:statereduser.item,
    total:0,
    additem:addItemHandler,
    removeitem:removeItemHandler,
    cartvisiblefun:cartVisableHandler,
    carthide:cartHideHandler,
    cartvalue:cartvisible,
    totalItem:totalitems,
    totalprice:statereduser.total,
    removeallitem:remoAllItemHandler
    
}




    return (<CartContext.Provider value={contextvalue}>

           {props.children}

    </CartContext.Provider>)
}


export default CartProvider;