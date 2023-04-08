import * as React from "react"
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg"

const IdentifyImage = (props:any) => (
  <Svg
    width={210}
    height={210}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={210} height={210} rx={26} fill="url(#a)" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.00758)" />
      </Pattern>
      <Image
        id="b"
        width={132}
        height={132}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default IdentifyImage
