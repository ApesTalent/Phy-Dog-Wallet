import * as React from "react"
import Svg, { Path } from "react-native-svg"

const WalletIcon = (props:any) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.2}
      d="M3.797 18.932V7.462A1.547 1.547 0 0 0 5.25 8.479h15a.703.703 0 0 1 .703.703v10.5a.703.703 0 0 1-.703.703h-15a1.453 1.453 0 0 1-1.453-1.453Z"
    />
    <Path
      d="M3.75 6.932v12a1.5 1.5 0 0 0 1.5 1.5h15a.75.75 0 0 0 .75-.75v-10.5a.75.75 0 0 0-.75-.75h-15a1.5 1.5 0 0 1-1.5-1.5Zm0 0a1.5 1.5 0 0 1 1.5-1.5H18"
      stroke={props.color? props.color : "#98A1AA"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.875 15.557a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
      fill={props.color? props.color : "#98A1AA"}
    />
  </Svg>
)

export default WalletIcon;
