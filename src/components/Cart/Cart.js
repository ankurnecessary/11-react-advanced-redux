import React from 'react'
import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length && cartItems.map(item => <CartItem
          key={item.title}
          item={item}
        />)}

      </ul>
    </Card>
  )
}

export default Cart
