import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DiagramIcon = (props:any) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21 19.5H3v-15"
      stroke="#162534"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m21 9-6 5.25-6-4.5L3 15"
      stroke="#162534"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default DiagramIcon