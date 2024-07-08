import React from "react";
import styled from "styled-components";
import everytimeIcon from "../assets/icons/everytimeLogo.png";
import chatIcon from "../assets/icons/chatIcon.png";
import personIcon from "../assets/icons/personIcon.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogoIconClick = () => {
    navigate(`/`);
  };

  return (
    <Wrapper>
      <Left>
        <img
          onClick={handleLogoIconClick}
          src={everytimeIcon}
          alt="에브리타임 한동"
        ></img>
      </Left>
      <Middle>
        <Category onClick={handleLogoIconClick}>게시판</Category>
        <Category>시간표</Category>
        <Category>강의실</Category>
        <Category>학점계산기</Category>
        <Category>친구</Category>
        <Category>책방</Category>
        <Category>캠퍼스픽</Category>
      </Middle>
      <Right>
        <img src={chatIcon} alt="메세지 아이콘"></img>
        <img src={personIcon} alt="유저 아이콘"></img>
      </Right>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  border: 0.9px solid #c2c1c1;
  background-color: white;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 300px;
  img {
    cursor: pointer;
    margin-left: 140px;
    margin-top: 10px;
    height: 55px;
  }
`;

const Middle = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Category = styled.div`
  cursor: pointer;
  width: 75px;
  font-size: 17px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: #353535;

  &:hover {
    color: #e90909;
  }
`;
const Right = styled.div`
  width: 300px;
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
    height: 45px;
  }

  img:first-child {
    margin-left: 68px;
  }
`;
