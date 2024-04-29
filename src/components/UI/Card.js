import React from 'react';
import PropTypes from 'prop-types';
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
