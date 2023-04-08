import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UpArrowIcon = (props) => (
  <Svg
    width={12}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6 10.777v-8.25M2.625 5.902 6 2.527l3.375 3.375"
      stroke="#60BA62"
      strokeWidth={1.125}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default UpArrowIcon