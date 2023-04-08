import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CopyIcon = (props:any) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21 21h6V5H11v6"
      stroke="#485068"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 11H5v16h16V11Z"
      stroke="#485068"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CopyIcon