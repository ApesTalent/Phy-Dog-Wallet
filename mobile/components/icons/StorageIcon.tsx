import * as React from "react"
import Svg, { Path } from "react-native-svg"

const StorageIcon = (props:any) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 8.466h8.25a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H3.75a.752.752 0 0 1-.75-.75v-9"
      stroke={props.color? props.color : "#98A1AA"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.75 10.716H3v-3.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .45.15l2.8 2.1-2.8 2.1a.75.75 0 0 1-.45.15Z"
      stroke={props.color? props.color : "#98A1AA"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default StorageIcon;
