import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SupportIcon = (props:any) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.375 18.25H2.469a.72.72 0 0 1-.719-.72V9.625A8.625 8.625 0 0 1 10.375 1h0A8.624 8.624 0 0 1 19 9.624v0a8.625 8.625 0 0 1-8.625 8.625Z"
      stroke={props.color? props.color : "#98A1AA"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SupportIcon;