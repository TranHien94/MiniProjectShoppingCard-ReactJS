import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {actionUpdate, actionDelete} from '../redux/action'

export default function Cart({ cart, stt }) {
    const dispatch = useDispatch()
    const [quantityItem, setQuantityItem]=useState(0) // khai bao quan ly sl trong gio hang
    
    const handleUpdate = () => {
        dispatch(actionUpdate(cart.product.productId, quantityItem));
    };
    
    const handleDelete = () => {
        dispatch(actionDelete(cart.id));
    };

    
    useEffect(() => {
        setQuantityItem(cart.quantity);
    }, [cart.quantity]);

  return (
    <>
          <tr>
              <th scope="row">{stt}</th>
              <td>{cart.product.productName}</td>
              <td>{cart.product.price} USD</td>
              <td>
                  <input
                      name="cart-item-quantity-1"
                      type="number"
                      min="1"
                      value={quantityItem}
                      onChange={(e) => setQuantityItem(+e.target.value)}
                  />
              </td>
              <td>
                  <strong>{cart.product.price * quantityItem} USD</strong>
              </td>
              <td>
                  <button
                      className="label label-info update-cart-item"
                      data-product=""
                      onClick={handleUpdate}
                  >
                      Update
                  </button>
                  <button
                      className="label label-danger delete-cart-item"
                      data-product=""
                      onClick={handleDelete}
                  >
                      Delete
                  </button>
              </td>
          </tr>
    </>
  )
}

