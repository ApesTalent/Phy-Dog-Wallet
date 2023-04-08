import Svg, { Path } from "react-native-svg"

const Recover = (props:any) => (
  <Svg
    width={63}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1 18h53M45 1l17 17-17 17"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Recover;