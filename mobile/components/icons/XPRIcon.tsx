import * as React from "react"
import Svg, { Path } from "react-native-svg"

const XPRIcon = (props:any) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.94.326h2.53l-5.265 6.295c-1.907 2.278-4.998 2.278-6.906 0L.032.326h2.532l4 4.782C7.147 5.8 7.932 6.19 8.75 6.19c.818 0 1.604-.389 2.187-1.082L14.939.326ZM2.531 17.83H0l5.299-6.334c1.906-2.278 4.997-2.278 6.905 0l5.3 6.333h-2.53l-4.034-4.82c-.583-.694-1.369-1.083-2.187-1.083-.818 0-1.603.39-2.186 1.083l-4.036 4.82Z"
      fill="#fff"
    />
  </Svg>
)

export default XPRIcon