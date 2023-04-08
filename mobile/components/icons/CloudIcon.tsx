import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CloudIcon = (props:any) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.5 12.898a7.5 7.5 0 1 1 7.5 7.5H6.75A5.25 5.25 0 1 1 8.055 10.06"
      stroke={props.color? props.color : "#98A1AA"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CloudIcon;
