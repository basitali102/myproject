const initialstate = [
    {
        id: "",
        name: "",
        price: "",
        quantity:""
    }
]

const Reducer = (states = initialstate, action)=>{
    switch (action.type) {
        case "ADD_PRODUCT":
            return[
                ...states,
                action.payload
            ]
            break;

        case "Update_PRODUCT":
            return[
                ...action.payload
            ]
            break;

        case "DELETE_PRODUCT":
            return(
                action.payload
                )   
            break;

        default:
            return states;
    }
}

export default Reducer;