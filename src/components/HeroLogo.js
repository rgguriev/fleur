import React from "react"
import styled from 'styled-components';

const HeroStyled = styled.div`
  height: 25vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
`
const HeroBoxStyled = styled.div`
  position: relative;
  height: 150px;
  .hero-name {
    position: relative;
    line-height: 10px;
    font-size: 9.5vw;
    @media ( min-width: 1440px ) {
      font-size: 140px;
      -webkit-text-stroke-width: 2.5px;
    }
    -webkit-text-stroke-width: 0.2vw; 
    color: #FBF7F6;
    max-height: 10px;
    z-index: 1;
    margin-bottom: 0;
  }
  .hero-name-1 {
      font-size: 10vw;
      @media ( min-width: 1440px ) {
        font-size: 148px;
        -webkit-text-stroke-width: 3px;
        bottom: 44px;
      }
      bottom: 3vw;
      left: 10px;
      -webkit-text-stroke: 0.22vw #455b66;
      text-shadow: 0px 4px 19px #FBF7F6;
    }
  .hero-name-2 {
    top: 0;
    @media ( min-width: 1440px ) {
      top: 0px;
      -webkit-text-stroke-width: 3px;
    }
    left: 27.5px;
    -webkit-text-stroke: 0.2vw #F6E7E3;
  }
  .hero-name-3 {
    top: 1.6vw;
    @media ( min-width: 1440px ) {
      top: 20px;
      -webkit-text-stroke-width: 3px;
    }
    left: 26px;
    -webkit-text-stroke: 0.2vw #F8981D;
  }
  .hero-name-4 {
    top: 3.2vw;
    @media ( min-width: 1440px ) {
      top: 40px;
      -webkit-text-stroke-width: 3px;
    }
    left: 24.5px;
    -webkit-text-stroke: 0.2vw #fcc02a;
  }
  .hero-name-5 {
    top: 4.6vw;
    @media ( min-width: 1440px ) {
      top: 60px;
      -webkit-text-stroke-width: 3px;
    }
    left: 23px;
    -webkit-text-stroke: 0.2vw #e77373;
  }
  .hero-name-6 {
    top: 6.2vw;
    @media ( min-width: 1440px ) {
      top: 80px;
      -webkit-text-stroke-width: 3px;
    }
    left: 21.5px;
    -webkit-text-stroke: 0.2vw #0b7a6a;
  }
  .hero-name-7 {
    top: 7.8vw;
    @media ( min-width: 1440px ) {
      top: 100px;
      -webkit-text-stroke-width: 3px;
    }
    left: 20px;
    -webkit-text-stroke: 0.2vw #783294;
  }
`


const HeroLogo = () => {
  return (
    <HeroStyled>
      <HeroBoxStyled>
        <h1 className="hero-name hero-name-7">СтудияФлёр</h1>
        <h1 className="hero-name hero-name-6">СтудияФлёр</h1>
        <h1 className="hero-name hero-name-5">СтудияФлёр</h1>
        <h1 className="hero-name hero-name-4">СтудияФлёр</h1>
        <h1 className="hero-name hero-name-3">СтудияФлёр</h1>
        <h1 className="hero-name hero-name-2">СтудияФлёр</h1>
        <h1 className="hero-name hero-name-1">СтудияФлёр</h1>
      </HeroBoxStyled>
    </HeroStyled>
  )
}

export default HeroLogo
