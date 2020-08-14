/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { GlobalStyle } from '../styles/global'
import '../styles/gradient-animation.css'

import Header from './header'
import Footer from './footer'
import styled from 'styled-components/macro'
import { theme } from '../styles/theme'

const ContentWrapper = styled.div`
  max-width: 75rem;
  padding: 0 1rem;

  @media (min-width: ${theme.breakpoints.mobile}px) {
    margin: 0 auto;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <div className='bg-gradient'>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ContentWrapper>
          <main>{children}</main>
          <Footer />
        </ContentWrapper>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
