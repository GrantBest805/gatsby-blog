import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Archive from './archive'
import Image from '../components/image'
import { Spring } from 'react-spring/renderprops'
import { useSiteMetadata } from '../custom-query-hooks/useSiteMetadata'

import styled from 'styled-components'
import './layout.css'

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 60px;
`

const Layout = ({ children, location = {} }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Header siteTitle={title} siteDescription={description} />
      <Spring
        from={{ height: location.pathname === '/' ? 100 : 400 }}
        to={{ height: location.pathname === '/' ? 400 : 100 }}
      >
        {styles => (
          <div style={{ overflow: 'hidden', ...styles }}>
            <Image />
          </div>
        )}
      </Spring>
      <MainLayout>
        <div>{children}</div>
        <Archive />
      </MainLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
