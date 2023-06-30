import { ACT_BUY, ACT_UPDATE, ACT_DELETE } from '../constant'

const initState= JSON.parse(localStorage.getItem('listCard')) ||[]
const listCard=(state=initState, action)=>{
    switch (action.type){
        case ACT_BUY:
            if(state.length==0){ // khach chua mua hang
                let newCard ={
                    id: 1, 
                    product: action.payload.product, 
                    quantity: action.payload.quantity,

                }
                state=[...state, newCard]
            }
            //da mua hang
            else{// sp co san
                if (checkCartExist(state, action.payload.product.productId)){
                    for(let i=0; i<state.length; i++){
                        if(state[i].product.productId == action.payload.product.productId){
                            state[i].quantity+=action.payload.quantity;
                            break;
                        }
                    }
                    state=[...state]
                } else{ // sp ko co san
                    let newId= Date.now()
                    let newCard={
                        id: newId,
                        product: action.payload.product,
                        quantity: action.payload.quantity,
                    }
                    state=[...state, newCard]
                }
            }
            localStorage.setItem('listCard', JSON.stringify(state))
            return state
        case ACT_UPDATE:
            for (let i = 0; i < state.length; i++) {
                if (state[i].product.productId == action.payload.productId) {
                    state[i].quantity = action.payload.quantity;
                    break;
                }
               
            }
            state = [...state]
            localStorage.setItem('listCard', JSON.stringify(state))
            return state
        case ACT_DELETE:
            let updateListCard=state.filter((card)=>card.id != action.payload)
            console.log(updateListCard);
            state=[...updateListCard]
            localStorage.setItem('listCard', JSON.stringify(state))
            return state
        default:
            return state

    }
}
const checkCartExist=(listCard, productId)=>{
    for (let i = 0; i < listCard.length; i++){
        if(listCard[i].product.productId == productId){
            return true
        }
    }
    return false
}

export default listCard