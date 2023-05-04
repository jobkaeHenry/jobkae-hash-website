import styled from "styled-components";
import logo from "../assets/henry.jpg";

const Logo = () => {
  return <LogoWrapper src={logo} alt="네오빛 로고" height={48} width={48}/>;
};

export const LogoWrapper = styled.img`
  width: 48px;
`;
export default Logo;
