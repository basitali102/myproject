import {createStore} from "redux"
import rootreducer from "../reduxreducer/rootreducer"

const store = createStore(rootreducer);

export default store;