import * as React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import img from '../assets/grains.png'

import Header from "./Header/Header"
import Footer from "./Footer/footer"

import {
  useGlobalStateContext
} from "../context/globalContext"
import { GlobalStyle } from "../styles/globalStyles"

const LayoutWrapper = styled.div `
  display: flex;
  flex-direction: column;
  
  &:before {
    content: "";
    background-image: url(${img});
    height: 270%;
    width: 300%;
    opacity: 0.14;
    position: fixed;
    left: -100%;
    top: -100%;
    animation: grain 8s steps(10) infinite;
  }
  @keyframes grain {
  0%, 100% { transform:translate(0, 0) }
  10% { transform:translate(-5%, -10%) }
  20% { transform:translate(-15%, 5%) }
  30% { transform:translate(7%, -25%) }
  40% { transform:translate(-5%, 25%) }
  50% { transform:translate(-15%, 10%) }
  60% { transform:translate(15%, 0%) }
  70% { transform:translate(0%, 15%) }
  80% { transform:translate(3%, 35%) }
  90% { transform:translate(-10%, 10%) }
  }
`

const Layout = ({ children }) => {

  const darkTheme = {
    accentColor: '#E65425',
    headerColor: '#000000',
    logoColor: '#ffffff',
    background: '#363537',
    text: '#fafafa',
    toggleBorder: '#6b8096',
  }

  const lightTheme = {
    accentColor: '#E65425',
    headerColor: '#ffffff',
    logoColor: '#E65425',
    background: '#fef0e7',
    // background: '#ffefd5',
    text: '#363537',
    toggleBorder: '#ffffff',
  }

  const {
    currentTheme
  } = useGlobalStateContext()

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <LayoutWrapper>
        <GlobalStyle />
        <Header/>
        <main>{children}</main>
        <Footer/>
      </LayoutWrapper>
    </ThemeProvider>
  )
}



export default Layout
