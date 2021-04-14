import styled from "styled-components"
import { motion } from "framer-motion"
import { Container, Flex } from "../../styles/globalStyles"

export const HeaderNav = styled(motion.div)`
  //padding: 1rem 2rem;
  //flex-direction: row;
  width: 100%;
  z-index: 1000;
  right: 0;
  left: 0;
  background-color: ${props => props.theme.headerColor};
  height: 80px;
`

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 100%;
  
  ${Container}
`

export const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  .logo {
    width: auto;
    font-family: "Montserrat ExtraBold",serif ;
    font-style: italic;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props => props.theme.logoColor};
    font-size: 28px;
    text-transform: uppercase;
  }
`
