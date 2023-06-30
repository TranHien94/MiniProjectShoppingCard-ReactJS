import React from 'react'
import ListProduct from './Components/manageProduct/ListProduct'
import ListCart from './Components/yourCart/ListCart'


export default function App() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>
            Project: Shopping Cart <small>ReactJS</small>
          </h1>
        </div>
        <div className="row  ">
          <ListProduct></ListProduct>
          <ListCart></ListCart>


        </div>
      </div>
    </>
  )
}
