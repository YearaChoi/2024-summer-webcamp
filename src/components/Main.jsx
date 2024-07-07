import React from "react";
import styled from "styled-components";
import HotBoard from "./HotBoard";
import Board from "./Board";

function Main() {
  const 자유게시판 = [
    "빙글빙글 돌아가는",
    "디즈니플러스 한 달 같이 하실 분",
    "와 소입 B+이다...!",
    "공간학입문 월목4 분반",
  ];
  const 비밀게시판 = [
    "슬프다",
    "사람이 싫어",
    "배고프다... 돈이 없다...",
    "교수님이 메일을 안보신다",
  ];
  const 졸업생게시판 = [
    "서울 내/영등포 근처 6개월 자취방 양도 구...",
    "출판업계",
    "세후 300에",
    "대박늦어버린 졸업생소개팅 결과 + 업...",
  ];
  const 새내기게시판 = [
    "한인교",
    "교양필수",
    "1학년 1학기 성적 생각보다 너무 망했다..",
    "ef - cawood교수님 성적 나왔나요??",
  ];
  const 정보게시판 = [
    "35년에는 사라질 직업들..",
    "예소도 방학 기간 영업시간 안내드립니다...",
    "미래에 더 필요한 직업 리스트",
    "[창업/진로]에 대해 한번쯤 고민이 있으...",
  ];
  const 취업진로 = [
    "2024 외교부 국제기구 진출 설명회",
    "25년부터 사라질 직업군 (ㅎㄷㄷ)",
    "24년도 하반기 NIBC 인턴십 모집 안내...",
    "SW 캠공 채용공고 오픈채팅방",
  ];
  const 홍보게시판 = [
    "뇌인지과학회 창설 멤버 모집",
    "[2024-2학기 현지정주형(16주간) 인...",
    "📢 공지 📢 스마일/라섹/라식 한동대 ...",
    "[코드잇 스프린트] 프론트엔드 부트캠...",
  ];
  const 동아리학회 = [
    "🔴 전국 유일무이 엔터테인먼트 클럽 ...",
    "📰한동신문사 추가 리크루팅합니다!!",
    "🔴 전국 유일무이 엔터테인먼트 클럽 ...",
    "🐤24-2 두두스 사전 리쿠르팅🐤",
  ];

  return (
    <Wrapper>
      <Contents>
        <Left>
          <PersonInfo></PersonInfo>
          <PersonInfo2></PersonInfo2>
          <AdImg></AdImg>
          <AdImg></AdImg>
          <AdImg></AdImg>
        </Left>
        <Middle>
          <BigAdImg />
          <BoardWrapper>
            {" "}
            <Board boardTitle="자유게시판" posts={자유게시판} />
            <Board boardTitle="비밀게시판" posts={비밀게시판} />
            <Board boardTitle="졸업생게시판" posts={졸업생게시판} />
            <Board boardTitle="새내기게시판" posts={새내기게시판} />
            <Board boardTitle="정보게시판" posts={정보게시판} />
            <Board boardTitle="취업진로" posts={취업진로} />
            <Board boardTitle="홍보게시판" posts={홍보게시판} />
            <Board boardTitle="동아리학회" posts={동아리학회} />
          </BoardWrapper>
          <Books></Books>
        </Middle>
        <HotBoard />
      </Contents>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  height: 180vh;
`;

const Contents = styled.div`
  /* border: 2px solid green; */
  display: flex;
  margin: auto;
  margin-top: 30px;
  height: 98%;
  width: 80%;
`;

const Left = styled.div`
  /* border: 1px solid red; */
  width: 170px;
  margin-right: 15px;
`;

const PersonInfo = styled.div`
  border: 0.9px solid #c2c1c1;
  background-color: #f9f9f9;
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`;

const PersonInfo2 = styled.div`
  border: 0.9px solid #c2c1c1;
  background-color: #f9f9f9;
  width: 100%;
  height: 130px;
`;

const AdImg = styled.div`
  margin-top: 8px;
  border: 0.9px solid #c2c1c1;
  width: 100%;
  height: 110px;
`;

const Middle = styled.div`
  /* border: 1px solid red; */
  width: 600px;
  margin-right: 15px;
`;

const BigAdImg = styled.div`
  border: 0.9px solid #c2c1c1;
  width: 100%;
  height: 160px;
`;

const BoardWrapper = styled.div`
  /* border: 1px solid blue; */
  margin-top: 15px;
  height: 115vh;
  display: flex;
  flex-wrap: wrap;
`;

const Books = styled.div`
  border: 0.9px solid #c2c1c1;
  width: 100%;
  height: 260px;
`;
