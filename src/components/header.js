import PropTypes from 'prop-types'
import React from 'react'
import { H1 } from './H1'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <H1>{siteTitle}</H1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
