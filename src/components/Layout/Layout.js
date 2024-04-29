import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import MainHeader from './MainHeader'

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node
}
