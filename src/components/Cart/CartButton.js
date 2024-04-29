import React from 'react'
import classes from './CartButton.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const quantity = useSelector(state => state.cart.items.length)

  function toggleCart () {
    dispatch(cartActions.toggleCart())
  }

  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  )
}

export default CartButton
