import React from "react";
import Modal from "react-modal"
import Updateproduct from "../../redux/reduxaction/Updateproduct"
import {connect} from "react-redux"
import { toast } from "react-toastify";
import isupdatetablerows from '../../redux/reduxaction/isupdatetablerows'
import {useState, useEffect} from "react"

Modal.setAppElement("#root")
const Productupdate =(props)=>{
    const forminitialstate ={
        id: 0,
        name: "",
        price: "",
        quantity:""
    }
    const [ModalIsOpen, setModalIsOpen] = useState(true)
    const [formstate, setformstate] = useState(()=> forminitialstate)

    useEffect(()=>{
        setformstate((previosvalue)=>{
            return(
                {
                    ...previosvalue,
                    ...props.editrowprops
                }
            )
        })
    },[])


    const notifys=(text)=>{
        toast(text, {position:toast.POSITION.TOP_CENTER, autoClose:3000})
    }

    const inputHandle = (event)=>{
        const {name , value} = event.target
        console.log(`this is update consol ${name} ${value}`)
        setformstate ((previousstate)=>{
            return(
                {
                    ...previousstate,
                    [name] : value
                }
            )
        })
    }

    const cancle =()=>{

        props.dispatchedrowprops({
                iswindowpopup:false,
                id:0,
                name:'',
                price:'',
                quantity:'',
            })
        
        setModalIsOpen(()=>false)
    }
    const validate=()=>{
        if(formstate.name === ""){
            notifys("product name should not be empty");
        }
        else if(formstate.price == ""){
            notifys("product price must be grater than zero");
        }
        else if(formstate.quantity === ""){
            notifys("quantity field is empty.");
        }
        else{
            return true
        }
        
    }
    
    const productUpdatehandler = (Event)=>{
        if(validate()){
            if(props.update_product.length>0){
                console.log(`submited update product`)
                const product_states = [...props.update_product];
                const index = product_states.findIndex((item)=> item.id == props.editrowprops.id);
                product_states[index] = {...product_states[index], ...formstate }
                props.actiondispatch(product_states)
                setModalIsOpen(()=> false)
                props.dispatchedrowprops({iswindowpopup:false, id:0, name:'', price:'',quantity:""})
                Event.preventDefault();
            }
            else{
                Event.preventDefault();
            }
        }
        Event.preventDefault();
    }

    return(
        <>
            <Modal isOpen={props.editrowprops.iswindowpopup}>
                <div class="d-flex justify-content-center">
                    <h2>Update Product</h2>
                </div>
                <hr/>
                
                <form class="row g-3 shadow py-3">
                    <div class="col-md-6">
                        <label for="product_id" class="form-label">Product id</label>
                        <input type="number" class="form-control"
                        id="product_id" 
                        name="id" 
                        placeholder="Enter product id"
                        onChange={inputHandle}
                        value={formstate.id}
                        disabled
                        required/>
                    </div>
                    <div class="col-md-6">
                        <label for="product_name" class="form-label">product name</label>
                        <input type="text" class="form-control" 
                        id="product_name" 
                        name='name'
                        placeholder="Enter product name"
                        onChange= {inputHandle}
                        value={formstate.name}
                        required/>
                    </div>
                    <div class="col-md-6">
                        <label for="product_price" class="form-label">Product price</label>
                        <input type="text" class="form-control" 
                        id="product_price" 
                        name="price" 
                        placeholder="Enter product Price" 
                        onChange={inputHandle}
                        value={formstate.price}
                        required
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="quantity" class="form-label">product quantity</label>
                        <input type="text" class="form-control"  
                        id="product_quantity" 
                        name="quantity"
                        placeholder="Enter product quantity"
                        value={formstate.quantity}
                        onChange={inputHandle}
                        
                        required
                        />
                    </div>
                    
                    <div class="col-12 d-flex justify-content-end">
                        <button type="submit" class="btn btn-primary " onClick={cancle}>Cancel</button>
                        <button type="submit" class="btn btn-primary ml-3" onClick={productUpdatehandler}>Update</button>
                    </div>
                </form>
                
            </Modal>
       </>
    )
}
const mapStateToProp = (state)=>{
    return{
        update_product: state.products,
        editrowprops: state.iseditrow
    }
}

const mapDispatchToprop = (dispatch)=>{
    return{
        actiondispatch : (updatedvalue)=>dispatch(Updateproduct(updatedvalue)),
        dispatchedrowprops: (rowprops)=>dispatch(isupdatetablerows(rowprops))
    }
}
export default connect(mapStateToProp, mapDispatchToprop)(Productupdate);
