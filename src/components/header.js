import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import StyledBackgroundSection from './BgImage'
import { SiteTitle } from './icons/SiteTitle'
import '../styles/text-animation.css'

// const BorderWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   box-shadow: 0 0 0 6rem inset;
//   z-index: -1;
// `
const TitleWrapper = styled.div`
  width: 100vw;
  position: absolute;
  top: 10rem;
  left: 5vw;
  & > svg {
    max-width: 55vw;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`
const StyledHeader = styled.header`
  position: relative;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Wrapper>
      <StyledBackgroundSection siteTitle={siteTitle}>
        {/* <BorderWrapper /> */}
      </StyledBackgroundSection>
    </Wrapper>
    <TitleWrapper className='puff-in-left'>
      <SiteTitle />
    </TitleWrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
