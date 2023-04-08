import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SwapIcon = (props:any) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m22 18 4 4-4 4M6 22h20M10 14l-4-4 4-4M26 10H6"
      stroke="#485068"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SwapIcon;