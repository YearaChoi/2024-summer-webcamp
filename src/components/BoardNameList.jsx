import React from "react";
import styled from "styled-components";

function BoardNameList() {
  return (
    <Wrapper>
      <Contents>
        <Part1>
          <p1>
            <Text>자유게시판</Text>
            <Text>비밀게시판</Text>
            <Text>졸업생게시판</Text>
            <Text>새내기게시판</Text>
            <Text>시사·이슈</Text>
            <Text>장터게시판</Text>
            <Text>정보게시판</Text>
            <Text>홍보게시판</Text>
          </p1>
          <p2>
            <Text>동아리·학회</Text>
          </p2>
        </Part1>
        <Part2>
          <div>
            <Text>취업·진로</Text>
          </div>
        </Part2>
        <Part3>
          <div>
            <Text>전산전자공학부 게시판</Text>
            <Text>생명과학부 게시판</Text>
            <Text>상사학부 게시판</Text>
          </div>
        </Part3>
        <Part4>
          <p1>
            <Text>연애/사랑이야기</Text>
            <Text>큐피트게시판</Text>
            <Text>콘디</Text>
            <Text>성 게시판</Text>
            <Text>알바생 게시판</Text>
            <Text>끝말잇기</Text>
            <Text>넷플릭스/왓챠 게시판</Text>
            <Text>씹덕 게시판</Text>
          </p1>
          <p2>
            <Text>요리킹조리킹</Text>
            <Text>게시판 찾기</Text>
          </p2>
        </Part4>
      </Contents>
    </Wrapper>
  );
}

export default BoardNameList;

const Wrapper = styled.div`
  border-bottom: 0.9px solid #c2c1c1;
  margin-top: 75px;
  height: 240px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  border-left: 0.9px solid #d0d0d0;
  border-right: 0.9px solid #d0d0d0;
  width: 67%;
  height: 88%;
  display: flex;
`;

const Text = styled.div`
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 10px;
  color: #3a3a3a;

  &:hover {
    color: #f40b0b;
  }
`;

const Part1 = styled.div`
  border-right: 0.9px solid #d0d0d0;
  width: 300px;
  display: flex;

  p1 {
    margin-left: 20px;
    margin-top: 6px;
  }

  p2 {
    margin-left: 80px;
    margin-top: 6px;
  }
`;

const Part2 = styled.div`
  border-right: 0.9px solid #d0d0d0;
  width: 170px;

  div {
    margin-left: 7px;
    margin-top: 6px;
  }
`;

const Part3 = styled.div`
  border-right: 0.9px solid #d0d0d0;
  width: 160px;

  div {
    margin-left: 7px;
    margin-top: 6px;
  }
`;

const Part4 = styled.div`
  width: 300px;
  display: flex;

  p1 {
    margin-left: 20px;
    margin-top: 6px;
  }

  p2 {
    margin-left: 50px;
    margin-top: 6px;
  }
`;
