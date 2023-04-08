import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DashboardIcon = (props:any) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.125 10.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75ZM16.875 10.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75ZM7.125 20.25a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75ZM16.875 20.25a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z"
      stroke={props.color? props.color : "#98A1AA"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default DashboardIcon;
