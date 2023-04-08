import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ListIcon = (props:any) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.625 13.437h-7.5M16.875 13.437h-3.75M5.625 6.562h-2.5M16.875 6.562h-8.75M8.125 4.687v3.75M13.125 15.312v-3.75"
      stroke="#485068"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ListIcon;