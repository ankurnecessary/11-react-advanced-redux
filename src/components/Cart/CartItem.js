import React from 'react'
import PropTypes from 'prop-types'
import classes from './CartItem.module.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store'

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item
  const dispatch = useDispatch()

  function decreaseQuantityHandler () {
    dispatch(cartActions.decreaseQuantity(props.item.id))
  }

  function increaseQuantityHandler () {
    dispatch(cartActions.increaseQuantity(props.item.id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantityHandler}>-</button>
          <button onClick={increaseQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem

CartItem.propTypes = {
  item: PropTypes.object
}
