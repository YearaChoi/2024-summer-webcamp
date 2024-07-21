import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import getBoardPost from "../apis/getBoardPost";

const Board = ({ boardTitle }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState("");
  const boardname = boardTitle;

  const handleBoardTitleClick = () => {
    navigate(`/board/${boardTitle}`);
  };

  const handlePostClick = (postId) => {
    navigate(`/board/${boardTitle}/post/${postId}`);
  };

  useEffect(() => {
    const fetchPostList = async () => {
      const fetchedPostList = await getBoardPost(boardname);
      setPosts(fetchedPostList.slice(0, 4));
    };
    fetchPostList();
  }, [boardname]);

  // console.log("board data: ", posts);
  // console.log("board name: ", boardname);

  function formatDate(createdAt) {
    const date = new Date(createdAt);

    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${month}/${day} ${hours}:${minutes}`;
  }

  return (
    <BoardContainer>
      <BoardTitle onClick={handleBoardTitleClick}>{boardTitle}</BoardTitle>
      {posts &&
        posts.map((post, index) => (
          <Post key={post.id} onClick={() => handlePostClick(post.id)}>
            <PostTitle key={index}>{post.title}</PostTitle>
            <CreatedDate>{formatDate(post.createdAt)}</CreatedDate>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.9px solid #c2c1c1;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const PostTitle = styled.div`
  font-size: 15px;
  height: 35px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const CreatedDate = styled.div`
  padding-right: 10px;
  font-size: 12px;
  color: #616161;
`;
