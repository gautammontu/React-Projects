import React from 'react';


const CartContext=React.createContext({
    item:[],
    total:0,
    additem:(item)=>{},
    removeitem:(id)=>{},
    cartvisiblefun:()=>{},
    carthide:()=>{},
    totalItem:0,
    totalprice:0,
    removeallitem:()=>{}
    

})


export default CartContext;