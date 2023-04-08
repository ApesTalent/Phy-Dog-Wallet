import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BitcoinIcon = (props:any) => (
  <Svg
    width={20}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.15 8.112c-.274-2.797-2.685-3.748-5.75-4.013l.008-3.895L10.048.2v3.792c-.623.003-1.262.01-1.897.033L8.148.22 5.788.216 5.79 4.09c-.52.011-1.023.019-1.511.022l-.004-.016-3.269.005.005 2.526s1.746-.03 1.718-.006c.96-.003 1.268.561 1.355 1.045l-.009 4.435c.068 0 .15-.004.258.02a1.36 1.36 0 0 1-.254-.004l-.007 6.203c-.044.298-.227.782-.886.777.024.028-1.717.006-1.717.006l-.475 2.831 3.086.008c.575.009 1.13.005 1.69.018l-.001 3.927 2.36.002.008-3.895c.643.009 1.286.018 1.892.018l.004 3.876 2.36.002v-3.926c3.987-.234 6.773-1.23 7.107-4.97.28-3.003-1.134-4.353-3.394-4.903 1.393-.7 2.247-1.941 2.043-3.98Zm-3.318 8.41c.005 2.93-5.032 2.6-6.635 2.594l.002-5.209c1.603.006 6.645-.456 6.633 2.614Zm-1.09-7.364c-.007 2.681-4.2 2.36-5.532 2.354l.005-4.72c1.333.005 5.526-.415 5.527 2.366Z"
      fill="#FFD233"
    />
  </Svg>
)

export default BitcoinIcon