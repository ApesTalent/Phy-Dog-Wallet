import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SendIcon = (props:any) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 21 24 7M24 19.5V7H11.5M5 27h22"
      stroke="#485068"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SendIcon;
