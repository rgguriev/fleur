import React from "react"
import styled from 'styled-components';
import HeroLogo from "./HeroLogo"


const HeroSection = styled.section`
  height: 92vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`
const HeroWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  
  h1 {
    font-size: 180px;
    //text-transform: uppercase;
    font-style: italic;
    font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 3px #E65425;
    line-height: 0.8;
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        <HeroLogo/>
      </HeroWrapper>
    </HeroSection>
  )
}

export default Hero
