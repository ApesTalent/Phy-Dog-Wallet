import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ReceiveIcon = (props:any) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16 4v19M7 14l9 9 9-9M5 27h22"
      stroke="#485068"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ReceiveIcon
