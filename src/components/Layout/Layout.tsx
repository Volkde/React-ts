import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import {
    LayoutComponent,
    Header,
    NavContainer,
    LogoContainer,
    Main,
    Footer,
    StyledNavLink
  } from './styles'
  import { LayoutProps } from './types'
  
  function Layout({ children }: LayoutProps) {
    return (
      <LayoutComponent>
        <Header>
        <LogoContainer onClick={() => window.location.href = "/"}></LogoContainer> 

          <NavContainer>
            <StyledNavLink
              to='/'
              style={
                ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
              }>
              Home
            </StyledNavLink>
            <StyledNavLink
              to='/about'
              style={
                ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
              }>
              About
            </StyledNavLink>
            <StyledNavLink
              to='/users'
              style={
                ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
              }>
              Users
            </StyledNavLink>

            <StyledNavLink to="/clients">Clients</StyledNavLink>

          </NavContainer>
        </Header>
        <Main>{children}</Main>
        <Footer>
        <LogoContainer onClick={() => window.location.href = "/"}></LogoContainer> 
        </Footer>
      </LayoutComponent>
    )
  }
  
  export default Layout
  