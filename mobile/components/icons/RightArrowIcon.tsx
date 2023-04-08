import * as React from "react"
import Svg, { Path } from "react-native-svg"

const RightArrowIcon = (props:any) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.75 3.375 12.375 9 6.75 14.625"
      stroke="#7C66EB"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default RightArrowIcon