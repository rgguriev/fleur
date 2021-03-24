import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0px;
  //padding: 1rem 2rem;
  //flex-direction: row;
  width: 100%;
  z-index: 1000;
  position: absolute;
  top: 40px;
  right: 0;
  left: 0;
`
export const Logo = styled(motion.div)`
  .logo {
    width: auto;
    font-family: "Montserrat ExtraBold",serif ;
    font-style: italic;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props => props.theme.text};
    font-size: 28px;
    text-transform: uppercase;
  }
`