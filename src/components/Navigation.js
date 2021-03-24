import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';


const NavigationStyles = styled.nav`
  
  ul {
    display: flex;
    margin-left: 0;
    margin-bottom: 0;
    @media screen and (max-width: 768px) {
      display: none;
    }
    li {
      list-style-type: none;
      padding: 15px;
      margin: 0px;
      a {
        margin: 15px;
      }
    }
  }
  
`

const Menu = styled.div`
  button {
    transform-origin: center;
    padding: 20px;
    outline: none;
    position: relative;
    display: none;
    border: none;
    background: none;
    span {
      display: block;
      width: 36px;
      height: 5px;
      background: ${props => props.theme.text};
      margin: 8px;
    }
    @media screen and (max-width: 768px) {
        display: block;
    }
  }
  
`


const Navigation = () => {
  return (
    <NavigationStyles>
      <Menu>
        <button>
          <span/>
          <span/>
        </button>
      </Menu>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog" >Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>
    </NavigationStyles>
  )
}

export default Navigation
