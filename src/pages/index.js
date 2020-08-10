import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { P } from '../components/P'
import { H2 } from '../components/H2'
import { H1 } from '../components/H1'
import { HR } from '../components/HR'
import styled from 'styled-components'

const BodyWrapper = styled.div`
  height: 100vh;
`

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <BodyWrapper>
      <H1>Brendan Moratz</H1>
      <HR />
      <H2>Biography</H2>
      <P>
        Et ultrices neque ornare aenean euismod. Enim facilisis gravida neque
        convallis. Facilisi etiam dignissim diam quis enim lobortis scelerisque
        fermentum. Facilisis gravida neque convallis a cras semper auctor neque
        vitae. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Luctus
        accumsan tortor posuere ac. Vulputate dignissim suspendisse in est ante
        in nibh mauris. Imperdiet dui accumsan sit amet nulla. Sagittis orci a
        scelerisque purus semper eget duis.
      </P>
      <P>
        A condimentum vitae sapien pellentesque habitant morbi tristique. Cras
        tincidunt lobortis feugiat vivamus at augue. Mi ipsum faucibus vitae
        aliquet nec ullamcorper sit. Et ultrices neque ornare aenean euismod.
        Enim facilisis gravida neque convallis. Facilisi etiam dignissim diam
        quis enim lobortis scelerisque fermentum. Facilisis gravida neque
        convallis a cras semper auctor neque vitae. Sollicitudin aliquam
        ultrices sagittis orci a scelerisque. Luctus accumsan tortor posuere ac.
        Vulputate dignissim suspendisse in est ante in nibh mauris. Imperdiet
        dui accumsan sit amet nulla. Sagittis orci a scelerisque purus semper
        eget duis.
      </P>
      <HR />
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    	  <Image />
    	</div> */}
    </BodyWrapper>
  </Layout>
)

export default IndexPage
