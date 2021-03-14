const Deleteproductaction = (productlist)=>{
    return{
        type: "DELETE_PRODUCT",
        payload: productlist
    }
}

export default Deleteproductaction;