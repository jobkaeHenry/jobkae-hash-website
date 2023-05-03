import styled from "styled-components";
import logo from "../assets/henry.jpg";

const Logo = () => {
  return <LogoWrapper src={logo} />;
};

export const LogoWrapper = styled.img`
  width: 48px;
`;
export default Logo;
