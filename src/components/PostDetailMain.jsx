import React from "react";
import HotBoard from "./HotBoard";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function PostDetailMain() {
  const { boardTitle } = useParams();
  return (
    <Wrapper>
      <Contents>
        <Left>
          <BoardTitle>{boardTitle}</BoardTitle>
        </Left>
        <HotBoard />
      </Contents>
    </Wrapper>
  );
}

export default PostDetailMain;

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const Contents = styled.div`
  display: flex;
  margin: auto;
  margin-top: 30px;
  height: 98%;
  width: 80%;
`;

const Left = styled.div`
  width: 70%;
  margin-right: 25px;
`;

const BoardTitle = styled.div`
  height: 60px;
  border: 1px solid #c2c1c1;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
