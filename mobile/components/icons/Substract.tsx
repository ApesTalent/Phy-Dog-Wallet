import Svg, { Path } from "react-native-svg";

const Substract = (props: any) => (
  <Svg
    width={51}
    height={51}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 24.201a1 1 0 1 0 0 2h21v-2H1ZM24.201 22h2V1a1 1 0 1 0-2 0v21ZM28 24.2v2h21.402a1 1 0 1 0 0-2H28ZM26.201 28h-2v21.402a1 1 0 1 0 2 0V28Z"
      fill="#162534"
    />
  </Svg>
)

export default Substract;