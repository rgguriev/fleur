import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../styles/globalStyles";
import { Menu, NavBtnLink, NavItem, NavItemBtn, NavLinks, NavMenu } from "./Navigation.elements";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <Menu onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </Menu>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLinks to='/'>Home</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to='/blog'>Decor</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to='/page-2'>Floristics</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to='/contact'>Gallery</NavLinks>
          </NavItem>

          <NavItemBtn>
            {button ? (
              <NavBtnLink to='/'>
                <Button primary>SIGN UP</Button>
              </NavBtnLink>
            ) : (
              <NavBtnLink to='/'>
                <Button fontBig primary>SIGN UP</Button>
              </NavBtnLink>
            )}
          </NavItemBtn>
        </NavMenu>
      </IconContext.Provider>
    </>
  )
}

export default Navigation
