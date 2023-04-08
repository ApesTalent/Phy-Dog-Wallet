import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SwapCircleIcon = (props:any) => (
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
        fill="#44BDFF"
        fillOpacity={0.15}
      />
      <G
        clipPath="url(#b)"
        stroke="#44BDFF"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M18.93 9H7.14M9.407 12.375 6.346 9l3.06-3.375" />
      </G>
      <G
        clipPath="url(#c)"
        stroke="#44BDFF"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M6.232 17h11.79M15.755 13.625 18.816 17l-3.06 3.375" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.79)" d="M0 0h24.488v27H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path
          fill="#fff"
          transform="rotate(-90 11.256 7.744)"
          d="M0 0h20v18.14H0z"
        />
      </ClipPath>
      <ClipPath id="c">
        <Path
          fill="#fff"
          transform="rotate(90 7.325 14.325)"
          d="M0 0h20v18.14H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SwapCircleIcon