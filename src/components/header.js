import React from "react"
import { Link } from 'gatsby'

import Navigation from "./Navigation"
import {Logo} from "../styles/headerStyles"
import {HeaderNav} from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

import {  useGlobalStateContext, useGlobalDispatchContext } from "../context/globalContext"




const Header = () => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({
        type: "TOGGLE_THEME",
        theme: "light"
      })
    } else {
      dispatch({
        type: "TOGGLE_THEME",
        theme: "dark"
      })
    }
  }

  return (
    <HeaderNav
      // animate={{y: 0, opacity: 1}}
      // initial={{y: -30, opacity: 0}}
      // transition={{duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9]}}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link Link to = '/'
            className = 'logo'
            onClick = {toggleTheme} >
              Флёр
            </Link>
          </Logo>
          <Navigation/>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
