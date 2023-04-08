import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SettingIcon = (props:any) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 17.398a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
      stroke="#98A1AA"
      strokeWidth={1.286}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.507 8.458c.222.326.419.668.59 1.023l2.432 1.35a9.74 9.74 0 0 1 .003 4.131l-2.434 1.351a7.873 7.873 0 0 1-.591 1.022l.047 2.782a9.74 9.74 0 0 1-3.576 2.067l-2.387-1.432c-.393.03-.787.03-1.18 0l-2.386 1.43a9.74 9.74 0 0 1-3.578-2.062l.046-2.783a7.854 7.854 0 0 1-.589-1.023l-2.433-1.35a9.74 9.74 0 0 1-.002-4.13l2.433-1.352c.171-.355.369-.696.591-1.022L5.447 5.68A9.74 9.74 0 0 1 9.022 3.61l2.387 1.432c.393-.03.788-.029 1.18.001l2.386-1.431a9.74 9.74 0 0 1 3.579 2.062l-.047 2.783Z"
      stroke="#98A1AA"
      strokeWidth={1.286}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SettingIcon;
