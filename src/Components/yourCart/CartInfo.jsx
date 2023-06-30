import React from 'react'

export default function CartInfo({ size, total }) {
     // hien thi cho show thong tin gia

    let info =
        size === 0 ? (
            <tr>
                <th colSpan={6}>Empty product in your cart</th>
            </tr>
        ) : (
            <tr>
                <td colSpan={4}>
                    There are <b>{size}</b> items in your shopping cart.
                </td>
                <td colSpan={2} className="total-price text-left">
                    Total: {total} USD
                </td>
            </tr>
        )
  return (
    <>
          <tfoot id="my-cart-footer">{info}</tfoot>
    </>
  )
}
