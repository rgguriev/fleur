import * as React from "react";
import styled from 'styled-components'

const StyledBackgroud = styled.div`
  height: 0px;
  width: 100%;
  padding: 0px;
  mix-blend-mode: normal;
  opacity: 0.5;
  filter: blur(90px);
  position: absolute;
  display: flex;
  justify-items: right;
  padding-bottom: 100%;
  .yellow-blur {
    height: 100%;
    width: 100%;
    left: 100px;
    top: 0;
    position: absolute;
    display: flex;
    justify-content: right;
    
  }
`

function BlurBackground() {
  return (
    <StyledBackgroud>
      <svg width="2200" height="1280" viewBox="0 0 2200 1280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M797.898 920.538C1080.85 869.101 1268.38 837.704 1213.57 709.446C1180.07 631.042 1138.84 661.325 978.358 637.309C716.35 598.099 328.655 244.509 200.28 244.509C-25.0272 244.509 -49.1233 900.76 72.5734 1179.73C194.27 1458.69 573.689 1084.2 797.898 920.538Z" fill="#90A4AF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M797.898 920.538C1080.85 869.101 1268.38 837.704 1213.57 709.446C1180.07 631.042 1138.84 661.325 978.358 637.309C716.35 598.099 328.655 244.509 200.28 244.509C-25.0272 244.509 -49.1233 900.76 72.5734 1179.73C194.27 1458.69 573.689 1084.2 797.898 920.538Z" fill="#90A4AF"/>
        </g>
        <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M1314.19 580.364C1689.71 518.851 2060.27 821.736 2167.56 542.252C2151.87 482.982 2289.53 29.4918 1935.86 1.74796C1582.19 -25.9959 1453.58 285.707 1280.3 285.707C976.166 285.707 653.111 255.414 727.389 466.698C891.661 664.084 1092.18 670.628 1314.19 580.364Z" fill="#FBB547"/>
        <path opacity="0.85" fill-rule="evenodd" clip-rule="evenodd" d="M1879.39 1008.18C2206.12 1178.47 2216.47 1024.47 2191.5 745.559C2179.03 678.422 1754.16 634.683 1473.2 603.257C1192.24 571.83 1198.56 661.914 1227.1 769.08C1173.74 932.315 689.898 829.769 820.398 1053.36C950.898 1276.94 1552.65 837.882 1879.39 1008.18Z" fill="#E65425"/>
      </svg>



    </StyledBackgroud>

  )
}

export default BlurBackground;

//