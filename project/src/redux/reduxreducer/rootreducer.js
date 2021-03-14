import Reducer from './Reducer'
import edittablerowreducer from './edittablerowreducer'
import {combineReducers} from 'redux'

const rootreducer = combineReducers({
    products : Reducer,
    iseditrow: edittablerowreducer
});

export default rootreducer;