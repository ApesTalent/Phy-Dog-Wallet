import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SendCircleIcon = (props:any) => (
  <Svg
    width={27}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M26.597 16.765C24.793 24 17.462 28.4 10.236 26.595 3 24.793-1.399 17.462.405 10.236 2.209 3 9.529-1.398 16.765.406c7.226 1.793 11.636 9.124 9.832 16.36Z"
        fill="#FFD233"
        fillOpacity={0.15}
      />
      <Path
        d="M13 20V7m0 13h4.5-9H13ZM7.375 12.75 13 7.125l5.625 5.625"
        stroke="#FFD233"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v27H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SendCircleIcon;