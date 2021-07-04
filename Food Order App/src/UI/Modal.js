
import {Fragment,useContext} from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
import CartContext from '../store/cart-context'


const portalElement = document.getElementById("overlay")



const Modal=(props)=>{

    return (<Fragment>
        {ReactDOM.createPortal( <Backdrop onClose={props.onClose}/>,portalElement)}
        {ReactDOM.createPortal( <ModalOverlay> {props.children}  </ModalOverlay>,portalElement)}


        </Fragment>)
}


export const Backdrop=(props)=>{

    const cart =useContext(CartContext)

    return <div className={classes.backdrop} onClick={cart.carthide}></div>
}



export const ModalOverlay=(props)=>{

    return (<div className={classes.modal}>

        <div className={classes.content}>{props.children}</div>
    </div>)
}

export default Modal;