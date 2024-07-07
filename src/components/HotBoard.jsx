import React from "react";
import styled from "styled-components";

function HotBoard() {
  return (
    <Wrapper>
      <Popular></Popular>
      <Hot></Hot>
      <Best></Best>
      <Lecture></Lecture>
    </Wrapper>
  );
}

export default HotBoard;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  width: 330px;
`;

const Popular = styled.div`
  border: 0.9px solid #8c8c8c;
  background-color: #f6f5f5;
  width: 100%;
  height: 160px;
`;

const Hot = styled.div`
  margin-top: 10px;
  border: 0.9px solid #8c8c8c;
  background-color: #f6f5f5;
  width: 100%;
  height: 183px;
`;

const Best = styled.div`
  margin-top: 10px;
  border: 0.9px solid #8c8c8c;
  background-color: #f6f5f5;
  width: 100%;
  height: 40px;
`;

const Lecture = styled.div`
  margin-top: 10px;
  border: 0.9px solid #8c8c8c;
  background-color: #f6f5f5;
  width: 100%;
  height: 300px;
`;
