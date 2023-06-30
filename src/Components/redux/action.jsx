import * as types from './constant'
export const actionBuy =(product, quantity)=>{
    return {
        type: types.ACT_BUY,
        payload: {product, quantity}
    }
}
export  const actionUpdate=(productId, quantity)=>{
    return {
        type: types.ACT_UPDATE,
        payload: {productId, quantity}
    }
}
export  const actionDelete=(id)=>{
    return{
        type: types.ACT_DELETE,
        payload: id
    }
}
