import React from 'react'
import './cart.scss'

const Cart = ({ cartItem, decreaseQty, addToCart }) => {
  console.log(cartItem);

  return (
    <section className='cart'>
      <div className="header_cart">
        <h4>REVIEW YOUR CART</h4>
      </div>
      {cartItem.length === 0 && <h4 className='no_item'>No Item are add in cart</h4>}

      {cartItem.map((product, index) => {
        const prodcutQty = product.price * product.qty
        return (
          <div className='product_cart' key={index}>
            <div className="img">
              <img src={product.img_1} alt="" />
            </div>
            <div className="product_cart_desc">
              <h5>{product.name}</h5>
              <span>{product.desc}</span><br />
              <h4>
                {product.price}.00 *  {product.qty}
                <span>${prodcutQty}.00</span>
              </h4>
              <i>Remove</i>
            </div>
            <div className='product_cart_qty'>
              <i className="fa fa-plus" onClick={() => addToCart(product)}></i>
              <span>{product.qty}</span>
              <i class="fa-solid fa-minus" onClick={() => decreaseQty(product)} ></i>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Cart