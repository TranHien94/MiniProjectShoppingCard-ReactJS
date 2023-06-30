import { ACT_BUY, ACT_UPDATE, ACT_DELETE, READY_TO_BUY, ADD_SUCCESS ,
    DELETE_SUCCESS, UPDATE_SUCCESS
} from '../constant'

const initState = READY_TO_BUY
const notify=(state=initState, action)=>{
    switch (action.type){
        case ACT_BUY:
            state = ADD_SUCCESS
            return state
        case ACT_UPDATE:
            state = UPDATE_SUCCESS
            return state
        case ACT_DELETE:
            state = DELETE_SUCCESS
            return state
        default:
            return state
    }
}
export default notify