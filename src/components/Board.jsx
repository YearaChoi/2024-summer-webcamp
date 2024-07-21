import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import getBoardPost from "../apis/getBoardPost";

const Board = ({ boardTitle }) => {
  const navigate = useNavigate();

  const handleBoardTitleClick = () => {
    navigate(`/board/${boardTitle}`);
  };

  const [posts, setPosts] = useState("");

  const boardname = boardTitle;

  useEffect(() => {
    const fetchPostList = async () => {
      const fetchedPostList = await getBoardPost(boardname);
      setPosts(fetchedPostList);
    };
    fetchPostList();
  }, [boardname]);

  console.log("board data: ", posts);
  console.log("board name: ", boardname);

  return (
    <BoardContainer>
      <BoardTitle onClick={handleBoardTitleClick}>{boardTitle}</BoardTitle>
      {posts &&
        posts.map((post, index) => (
          <Post onClick={handleBoardTitleClick} key={index}>
            {post.title} {post.createdAt}
          </Post>
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
