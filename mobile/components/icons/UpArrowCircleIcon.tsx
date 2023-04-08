import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UpArrowCircleIcon = (props:any) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.2}
      d="M12.351 21.614a9.263 9.263 0 1 0 0-18.526 9.263 9.263 0 0 0 0 18.526Z"
      fill="#60BA62"
    />
    <Path
      d="M12.351 21.614a9.263 9.263 0 1 0 0-18.526 9.263 9.263 0 0 0 0 18.526Z"
      stroke="#60BA62"
      strokeWidth={1.544}
      strokeMiterlimit={10}
    />
    <Path
      d="m9.076 11.766 3.275-3.275 3.275 3.275M12.35 16.21V8.491"
      stroke="#60BA62"
      strokeWidth={1.544}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default UpArrowCircleIcon