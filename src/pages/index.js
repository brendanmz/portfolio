import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { P } from '../components/P'
import { H2 } from '../components/H2'
import { H1 } from '../components/H1'
import { HR } from '../components/HR'
import styled from 'styled-components/macro'

const BodyWrapper = styled.div`
  height: 100vh;
`
const Row = styled.div`
  display: flex;
  margin: 4rem 8.125rem;

  /* max-width: 73.75rem; */

  div:nth-child(2) {
    margin-left: 5rem;
  }
`
const Column = styled.div`
  width: 100%;
  max-width: 33rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <BodyWrapper>
      <Row>
        <H1>Brendan Moratz</H1>
      </Row>
      <Row>
        <HR />
      </Row>
      <Row>
        <Column>
          <H2>Biography</H2>
          <P>
            I am a self-taught web developer from Canada and am very excited
            about all the creative possibilities there are in modern web
            development. I have been studying Front-end development through an
            open-source project called The Odin Project and have also worked as
            a PHP/JS Programmer at GoOut s.r.o..
          </P>
          <P>
            I have a Bachelor’s Degree in Music Performance with a focus on
            engineering and music production. Due to COVID my hours have been
            severely reduced at GoOut s.r.o. and have been actively seeking a
            Junior Front-end position with React. I have a lot to learn but I
            have been taking lessons/pair programming with a senior developer
            friend of mine for the past month as well as self-studying for ~15
            hours/wk for the past 3 months.
          </P>
        </Column>
        <Column>
          <P>
            My current preferred stack is: React, Redux + Redux Toolkit,
            styled-components, react-router-dom, formik, eslint, prettier.
          </P>
          <P>
            I am interested in continuing my learning in web development. As a
            Junior developer I expect to spend a lot of time making mistakes and
            having to recover fast, but this is a cycle I have become very used
            to in both my self-study and my lifetime of musical practice.
          </P>
        </Column>
      </Row>
      <Row>
        <HR />
      </Row>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    	  <Image />
    	</div> */}
    </BodyWrapper>
  </Layout>
)

export default IndexPage
