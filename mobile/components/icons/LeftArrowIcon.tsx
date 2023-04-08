import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LeftArrowIcon = (props:any) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15 19.5 7.5 12 15 4.5"
      stroke={props.color ? props.color : "#162534"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default LeftArrowIcon