import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import '../scss/ShoppingCard.scss'

export default function ListProduct() {
    const listProducts= useSelector((state)=>state.listProduct)
  return (
    <>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-primary">
                  <div className="panel-heading">
                      <h1 className="panel-title">List Products</h1>
                  </div>
                  <div className="panel-body" id="list-product">
                    
                      {listProducts.map((product) => (
                          <Product key={product.productId} product={product} />
                      ))}
                     
                  </div>
              </div>
          </div>
    </>
  )
}
