import React from "react"
import styled from '@emotion/styled';

import { Nav } from "./nav"
import { GlobalStyles } from './globalStyles';
import { Footer } from './footer';

class Layout extends React.Component {

  render() {
    const { location, title, children } = this.props
    return (
      <LayoutContainer>
        <GlobalStyles />
        <Nav />
        <main>{children}</main>
        <Footer />
      </LayoutContainer>
    )
  }
}

export default Layout

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
