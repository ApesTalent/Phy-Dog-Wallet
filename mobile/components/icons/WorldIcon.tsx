import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const WorldIcon = (props: any) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" stroke="#8169FA" strokeWidth={1.49}>
      <Path
        d="M11.92 21.44a8.94 8.94 0 1 0 0-17.88 8.94 8.94 0 0 0 0 17.88Z"
        strokeMiterlimit={10}
      />
      <Path d="M2.98 12.5h17.88" strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M11.92 21.198c2.058 0 3.726-3.894 3.726-8.698s-1.668-8.698-3.726-8.698c-2.057 0-3.725 3.894-3.725 8.698s1.668 8.698 3.725 8.698Z"
        strokeMiterlimit={10}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(0 .58)"
          d="M0 0h23.841v23.841H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
)

export default WorldIcon