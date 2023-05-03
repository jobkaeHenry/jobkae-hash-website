import styled from "styled-components";
import Logo from "../Logo";
import youtubelogo from "../../assets/youtube.webp";

function Navbar() {
  return (
    <Header>
      <Wrapper>
        <Logo />
        <GapWrapper href="https://www.youtube.com/@jobkaeHenry">
          <img height={"36px"} src={youtubelogo} alt="유튜브 로고" />
          <span>잡캐헨리</span>
        </GapWrapper>
      </Wrapper>
    </Header>
  );
}
const GapWrapper = styled.a`
  color: #444;
  display: flex;
  gap: 4px;
  align-items: center;
`;
const Header = styled.header`
  left: 0;
  width: 100vw;
  height: 72px;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: #fff;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export default Navbar;
