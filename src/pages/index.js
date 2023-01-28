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
import { A } from '../components/A'

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
          name: { eq: "BrendanMoratz-March2021CV" }
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
            <H3>Practice makes better</H3>
            <P>
              Currently I am employed as a React developer at{' '}
              <A href='https://www.pipedrive.com' target='_blank'>
                Pipedrive
              </A>
              , where I have been developing features for their Leads product. I am also working on their proprietary email inbox. I have been working mainly
               on the front-end with React (v16-17), Relay (graphql), TypeScript, and others.
            </P>
            <P>
              I have a Bachelor’s Degree in Music Performance with a focus on
              engineering and music production. In the summer of 2019 I made a
              career switch to front-end development. The idea of being able to
              work with progressive, technical-minded creators to create
              beautiful websites really excited me. Since then I have
              self-studied through the help of the limitless online resources,
              especially{' '}
              <A href='https://www.theodinproject.com/' target='_blank'>
                The Odin Project
              </A>
              .
            </P>
          </Column>
          <Column>
            <P>
              I started my career as a Javascript/PHP developer at GoOut s.r.o
              in Prague, Czechia. During this time my skills were quite basic
              but I learned many things, very quickly, such as jQuery, PHP(I’d
              never used it at all before the job), WordPress, LESS, and GoOut’s
              own framework.
            </P>
            <P>
              My next step was as a MERN-stack developer at{' '}
              <A href='https://limpide.net/' target='_blank'>Limpide s.r.o.</A>
               where I was working both on the back-end with Node, Express, MongoDB, Mongoose,
              Material-UI, Recharts, and others.
            </P>
            <P>
              When much of the world started locking down in March 2020, I was
              forced into some months of reclusion where I had time to learn
              some new tricks. It was then that I started delving deeper into
              front-end development by learning React and the many libraries
              that come with it, such as Redux, Styled-components, Formik, among
              others. In this time I was building projects to improve my skills,
              some of which can be found on my{' '}
              <A href='https://www.github.com/brendanmz' target='_blank'>
                Github profile
              </A>
            </P>
            <P>
              This site is built using React, Gatsby, Styled-components, Babel,
              Sharp, React-helmet, and others. Check out the repository{' '}
              <A href='https://github.com/brendanmz/portfolio' target='_blank'>
                here
              </A>
              .
            </P>
          </Column>
        </Row>
        <Row>
          <HR />
        </Row>
        <Row>
          <Column>
            <H2>Expertise</H2>
            <H3>Some things I&#39;ve learned</H3>
            <AnchorButton href={cvData.publicURL} download>
              CV
            </AnchorButton>
          </Column>
          <Column>
            <ul>
              <Li>ReactJS</Li>
              <Li>ES7</Li>
              <Li>MongoDB</Li>
              <Li>Mongooose</Li>
              <Li>Express</Li>
              <Li>NodeJS</Li>
              <Li>Webpack</Li>
              <Li>Git</Li>
            </ul>
          </Column>
          <Column>
            <ul>
              <Li>Unix Terminal</Li>
              <Li>HTML5</Li>
              <Li>Styled-components</Li>
              <Li>Material-UI</Li>
              <Li>CSS3</Li>
              <Li>Eslint</Li>
              <Li>Prettier</Li>
            </ul>
          </Column>
        </Row>
      </BodyWrapper>
    </Layout>
  )
}

export default IndexPage
