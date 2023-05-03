import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navigation/Navbar";
import styled from "styled-components";
import { SHA256 } from "crypto-js";
import serverImg from "./assets/server.png";
import avatar from "./assets/avatar.jpg";

function App() {
  const [content, setContent] = useState("");
  const [result, setResult] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hashed = SHA256(content).toString();
    setIsActive(true);
    setResult(hashed);
  };

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content).then(() => {
      alert("클립보드에 복사되었습니다! (센스쩔죠?)");
    });
  };

  useEffect(() => {
    if (isActive) {
      setTimeout(() => setIsActive(false), 700);
    } else return;
  }, [isActive]);

  return (
    <>
      <Navbar />
      <FormWrapper>
        <AvatarWrapper>
          <img src={avatar} alt="잡캐헨리"></img>
          <span>
            유튜브 콘텐츠 <a href="">'당신의 비밀번호는 안전하십니까?'</a> 에서
            다뤘던 해시함수를 체험해볼 수 있습니다.
          </span>
        </AvatarWrapper>
        <ServerWrapper>
          <ServerMsg className={isActive ? "active" : ""}>지이잉</ServerMsg>
          <ServerImg
            className={isActive ? "active" : ""}
            src={serverImg}
            alt="서버"
          />
        </ServerWrapper>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            입력창
            <input
              autoFocus
              placeholder="해쉬 할 문자를 입력해주세요"
              onChange={(e) => {
                setContent(e.target.value);
                console.log(content);
              }}
            />
          </InputWrapper>
          <Button type="submit" disabled={!content}>
            암호화 해보기
          </Button>
        </form>
        <InputWrapper>
          결과
          <ResultWrapper onClick={() => copyToClipboard(content)}>
            {!isActive ? result : "계산중.."}
          </ResultWrapper>
        </InputWrapper>
        <BradnMsg>
          {result && `즐거우셨다면 구독 부탁드려요!`}
          <br />
          <a href="https://www.youtube.com/@jobkaeHenry">
            {result && "바로가기>"}
          </a>
        </BradnMsg>
      </FormWrapper>
    </>
  );
}
const AvatarWrapper = styled.div`
  & > img {
    width: 60px;
    border-radius: 50%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  & span {
    text-align: center;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: 100%;
  max-width: 500px;
  padding: 24px;
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 16px;
  align-items: center;
  gap: 16px;
  & form {
    width: 100%;
  }
`;
const Button = styled.button`
  padding: 16px;
  width: 100%;
  background-color: #b61a84;
  color: #fff;
  &:disabled {
    background-color: #ccc;
  }
`;
const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 700;
  width: 100%;
  & input {
    display: flex;
    margin: 0.5rem 0;
    width: 100%;
    padding: 16px;
    border: 1px solid #eee;
    text-align: center;
    resize: none;
    font-size: 1rem;
    &:focus {
      border: 1px solid #00a5ba;
      outline-color: #00a5ba;
    }
  }
`;
const ServerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ServerMsg = styled.span`
  font-size: 1rem;
  opacity: 0;
  transform: translateX(45px) rotate(6deg);
  text-align: right;
  &.active {
    opacity: 1;
  }
`;
const ServerImg = styled.img`
  width: 100px;
  margin: 0 auto;
  &.active {
    animation: 300ms infinite ziing;
  }
  @keyframes ziing {
    50% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(2deg);
    }
  }
`;
const ResultWrapper = styled.div`
  border: 1px solid #eee;
  padding: 8px 16px;
  height: 150px;
  width: 100%;
  word-break: break-all;
  cursor: pointer;
`;
const BradnMsg = styled.div`
  text-align: center;
  height: 45px;
  cursor: pointer;
`;

export default App;
