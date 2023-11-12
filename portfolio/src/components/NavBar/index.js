import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  
`;

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>Logo</NavLogo>
        <MobileIcon></MobileIcon>
        <NavItems>
          <NavLink>Home</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton>Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
