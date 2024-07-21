import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HotBoard from "./HotBoard";
import Board from "./Board";
import mainAd from "../assets/icons/mainAd.png";
import Ad1 from "../assets/icons/Ad1.png";
import Ad2 from "../assets/icons/Ad2.png";
import Ad3 from "../assets/icons/Ad3.png";
import personImg from "../assets/icons/personImg.png";
import Book from "./Book";
import bookImg1 from "../assets/icons/bookImg1.png";
import bookImg2 from "../assets/icons/bookImg2.png";
import bookImg3 from "../assets/icons/bookImg3.png";
import bookImg4 from "../assets/icons/bookImg4.png";
import WeatherOpenAPI from "./WeatherOpenAPI";

function Main() {
  return (
    <Wrapper>
      <Contents>
        <Left>
          <PersonInfo>
            <PersonImg>
              <img src={personImg} alt="유저이미지"></img>
            </PersonImg>
            <Info>
              <UserName>한동22</UserName>
              <UserInfo>
                <div>최예라</div>
                <div>cyr22200750</div>
              </UserInfo>
            </Info>
            <Btn>
              <MyInfoBtn>내 정보</MyInfoBtn>
              <LogOutBtn>로그아웃</LogOutBtn>
            </Btn>
          </PersonInfo>
          <WeatherOpenAPI />
          <PersonInfo2>
            <MyLog>내가 쓴 글</MyLog>
            <MyLog>댓글 단 글</MyLog>
            <MyLog>내 스크랩</MyLog>
          </PersonInfo2>
          <AdImg>
            <img src={Ad1} alt="광고1"></img>
          </AdImg>
          <AdImg>
            <img src={Ad2} alt="광고2"></img>
          </AdImg>
          <AdImg>
            <img src={Ad3} alt="광고3"></img>
          </AdImg>
        </Left>
        <Middle>
          <BigAdImg>
            <img src={mainAd} alt="메인 광고"></img>
          </BigAdImg>
          <BoardWrapper>
            <Board boardTitle="자유게시판" />
            <Board boardTitle="비밀게시판" />
            <Board boardTitle="졸업생게시판" />
            <Board boardTitle="새내기게시판" />
            <Board boardTitle="정보게시판" />
            <Board boardTitle="취업진로" />
            <Board boardTitle="홍보게시판" />
            <Board boardTitle="동아리학회" />
          </BoardWrapper>
          <Books>
            <Book
              image={bookImg1}
              title="Contemporary Topics 1 with Essential Online"
              price="17,000원"
            />
            <Book image={bookImg2} title="행정법 강해" price="50,000원" />
            <Book
              image={bookImg3}
              title="14가지 테마로 즐기는 서양사"
              price="18,000원"
            />
            <Book
              image={bookImg4}
              title="심리영성 발달의 이해"
              price="15,000원"
            />
          </Books>
        </Middle>
        <HotBoard />
      </Contents>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  /* height: 180vh; */
  margin-bottom: 20px;
`;

const Contents = styled.div`
  display: flex;
  margin: auto;
  margin-top: 30px;
  height: 98%;
  width: 80%;
`;

const Left = styled.div`
  width: 170px;
  margin-right: 15px;
`;

const PersonInfo = styled.div`
  border: 0.9px solid #c2c1c1;
  background-color: #f9f9f9;
  width: 100%;
  height: 210px;
  margin-bottom: 10px;
`;

const PersonImg = styled.div`
  margin-top: 25px;
  height: 60px;
  display: flex;
  justify-content: center;

  img {
    width: 60px;
    height: 100%;
    border-radius: 10px;
  }
`;

const Info = styled.div`
  height: 70px;
  margin-top: 5px;
`;

const UserName = styled.div`
  margin-top: 10px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
`;
const UserInfo = styled.div`
  height: 30px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #7e7e7e;
  }
`;

const Btn = styled.div`
  margin-top: 5px;
  height: 30px;
  display: flex;
  justify-content: center;
`;

const MyInfoBtn = styled.div`
  border: 0.9px solid #c2c1c1;
  border-radius: 3px;
  width: 65px;
  height: 25px;
  margin-right: 5px;
  font-size: 13px;
  color: #606060;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LogOutBtn = styled.div`
  border: 0.9px solid #c2c1c1;
  border-radius: 3px;
  width: 65px;
  height: 25px;
  font-size: 13px;
  color: #606060;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PersonInfo2 = styled.div`
  border: 0.9px solid #c2c1c1;
  background-color: #f9f9f9;
  width: 100%;
  height: 130px;
  border-bottom: none;
`;

const MyLog = styled.div`
  border-bottom: 0.9px solid #c2c1c1;
  height: 43.2px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #292929;
  padding-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;

const AdImg = styled.div`
  margin-top: 8px;
  border: 0.9px solid #c2c1c1;
  width: 100%;
  height: 110px;

  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

const Middle = styled.div`
  width: 600px;
  margin-right: 15px;
`;

const BigAdImg = styled.div`
  border: 0.9px solid #c2c1c1;
  width: 100%;
  height: 160px;

  img {
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
`;

const BoardWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Books = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;
