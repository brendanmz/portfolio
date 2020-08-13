import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { P } from '../components/P'
import { H2 } from '../components/H2'
import { H1 } from '../components/H1'
import { HR } from '../components/HR'
import styled from 'styled-components/macro'
import { useStaticQuery, graphql } from 'gatsby'
import { AnchorButton } from '../components/A/AnchorButton'
import { theme } from '../styles/theme'
import { H3 } from '../components/H3'
import { Li } from '../components/Li'

const BodyWrapper = styled.div`
  height: 100%;
`
const Row = styled.div`
  color: ${theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
  padding: 0 auto;

  @media (min-width: ${theme.breakpoints.mobile}px) {
    flex-direction: row;
    div:nth-child(2) {
      margin-left: 5rem;
    }
  }
`
const Column = styled.div`
  width: 100%;
  max-width: 33rem;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "files" }
          name: { eq: "BrendanMoratz-July2020CV" }
        }
      ) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `)
  const cvData = data.allFile.edges[0].node
  return (
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
            <H3>
              Some little slogan or quote about something that’s not cheesy or
              lame AF!
            </H3>
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
              I am a self-taught web developer from Canada and am very excited
              about all the creative possibilities there are in modern web
              development. I have been studying Front-end development through an
              open-source project called The Odin Project and have also worked
              as a PHP/JS Programmer at GoOut s.r.o..
            </P>
            <P>
              I am interested in continuing my learning in web development. As a
              Junior developer I expect to spend a lot of time making mistakes
              and having to recover fast, but this is a cycle I have become very
              used to in both my self-study and my lifetime of musical practice.
            </P>
          </Column>
        </Row>
        <Row>
          <HR />
        </Row>
        <Row>
          <Column>
            <H2>Expertise</H2>
            <H3>
              Some little slogan or quote about something that’s not cheesy or
              lame AF!
            </H3>
            <AnchorButton href={cvData.publicURL} download>
              CV
            </AnchorButton>
          </Column>
          <Column>
            <ul>
              <Li>ReactJS</Li>
              <Li>ES6</Li>
              <Li>Gatsby JS</Li>
              <Li>Webpack</Li>
              <Li>Babel</Li>
              <Li>Redux</Li>
              <Li>Redux Toolkit</Li>
              <Li>React-router-dom</Li>
            </ul>
          </Column>
          <Column>
            <ul>
              <Li>HTML5</Li>
              <Li>Styled-components</Li>
              <Li>CSS3</Li>
              <Li>Unix Terminal</Li>
              <Li>Eslint</Li>
              <Li>Stylelint</Li>
              <Li>Prettier</Li>
            </ul>
          </Column>
        </Row>
      </BodyWrapper>
    </Layout>
  )
}

export default IndexPage
