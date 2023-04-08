import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const BuyCircleIcon = (props:any) => (
  <Svg
    width={26}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M24.02 16.144c-1.576 6.968-7.979 11.204-14.29 9.467C3.41 23.874-.43 16.814 1.145 9.856 2.72 2.888 9.114-1.347 15.434.39c6.31 1.726 10.161 8.786 8.586 15.754Z"
        fill="#60BA62"
        fillOpacity={0.15}
      />
      <Path
        d="M12.581 7v13m0-13h4.082M12.58 7H8.5M17.683 14.25l-5.102 5.625-5.102-5.625"
        stroke="#60BA62"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.79)" d="M0 0h24.488v27H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default BuyCircleIcon