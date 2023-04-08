import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

const TwitterIcon = (props: any) => (
  <Svg
    width={24}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 .304h23.159v19.073H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.00343 0 0 .00417 -.008 0)" />
      </Pattern>
      <Image
        id="b"
        width={296}
        height={240}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default TwitterIcon