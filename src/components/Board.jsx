import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Board = ({ boardTitle, posts }) => {
  const navigate = useNavigate();

  const handleBoardTitleClick = () => {
    navigate(`/board/${boardTitle}`);
  };

  return (
    <BoardContainer>
      <BoardTitle onClick={handleBoardTitleClick}>{boardTitle}</BoardTitle>
      {posts.map((post, index) => (
        <Post key={index}>{post}</Post>
      ))}
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
  border: 0.9px solid #c2c1c1;
  width: 286px;
  height: 183px;
  margin: 1%;
  box-sizing: border-box;
`;

const BoardTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #e90909;
  height: 40px;
  cursor: pointer;
  border-bottom: 0.9px solid #c2c1c1;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Post = styled.div`
  font-size: 15px;
  border-bottom: 0.9px solid #c2c1c1;
  cursor: pointer;
  height: 35px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  &:hover {
    background-color: #f9f9f9;
  }
`;
