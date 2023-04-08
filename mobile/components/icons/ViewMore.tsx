import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ViewMore = (props:any) => (
  <Svg
    width={8}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.75 1.375 6.375 7 .75 12.625"
      stroke="#7C66EB"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ViewMore;
