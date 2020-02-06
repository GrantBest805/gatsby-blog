import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { IoMdBarcode } from 'react-icons/io'

const HeaderWrapper = styled.div`
  background: #524763;
  img {
    margin: 0;
  }
`
const HeaderMainContainer = styled.div`
  margin-left: 20px;
  max-width: 960px;
  padding: 0.8rem;
`

const Header = ({ siteTitle, siteDescription }) => (
  <HeaderWrapper>
    <HeaderMainContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <IoMdBarcode style={{ color: 'white' }} />
          {/** <img  src={gatsbyLogo} alt="Gatsby Logo" /> */}
        </Link>
      </h1>
    </HeaderMainContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
