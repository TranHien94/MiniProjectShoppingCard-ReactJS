import React, { useState } from 'react'
import { actionBuy } from '../redux/action'
import { useDispatch } from 'react-redux'

export default function Product({product}) {
    const dispatch = useDispatch()
    const [quantity, setQuantity]=useState(1)
    const handleBuy=()=>{
        dispatch(actionBuy(product, quantity))
    }
    // cho phép mua những sản phẩm còn hàng
    let elementShow =
        product.quantity != 0 ? (
            <div>
                <input
                    name="quantity-product-1"
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(event) => setQuantity(+event.target.value)}
                />
                <a data-product={1} href="#" className="price" onClick={handleBuy}>
                    {product.price} USD
                </a>
            </div>
        ) : (
            // nếu không thì ẩn đi
            <span className="price"> {product.price} USD</span>
        )
  return (
  <>
          <div className="media product">
              <div className="media-left">
                  <a>
                      <img
                          className="media-object"
                          src={product.image}
                          alt={product.productName}
                      />
                  </a>
              </div>
              <div className="media-body">
                  <h4 className="media-heading">{product.productName}</h4>
                  <p>{product.title}</p>
                  {elementShow}
              </div>
          </div>
  </>
  )
}
