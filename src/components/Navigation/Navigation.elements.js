import styled from "styled-components"
import { Link } from "gatsby";

export const Menu = styled.div`
  height: 100%;
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  align-items: center;
  user-select: none;
  position:relative;
  left: 15px;
  padding: 15px;
  svg {
    fill: ${props => props.theme.text};
  }
  @media screen and (max-width: 960px) {
      display: flex;
    }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  height: 100%;
  margin-left: 0;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: cadetblue;
  }
`;

export const NavItem = styled.li`
  border-bottom: 2px solid transparent;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    border-bottom: 2px solid ${props => props.theme.accentColor};
    a {
      color: ${props => props.theme.accentColor};
      transition: all 0.2s ease;
    }
  }
  
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: ${props => props.theme.text};
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    
    &:hover {
      color: #4b59f7;
      
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display:flex;
  justify-content:center;
  align-items:center;
  text-decoration:none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border:none;
  outline: none;
`;