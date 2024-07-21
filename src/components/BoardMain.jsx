import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import HotBoard from "./HotBoard";
import penIcon from "../assets/icons/pencil.png";
import fireIcon from "../assets/icons/hot.png";
import UploadPost from "./UploadPost";
import getBoard from "../apis/getBoardPost";

function BoardMain() {
  const { boardTitle } = useParams();
  const [showUploadPost, setShowUploadPost] = useState(false);

  const handleClickUpload = () => {
    setShowUploadPost(true);
  };

  const [posts, setPosts] = useState("");

  const boardname = boardTitle;

  useEffect(() => {
    const fetchPostList = async () => {
      const fetchedPostList = await getBoard(boardname);

      const sortedPosts = fetchedPostList.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setPosts(sortedPosts);
      setShowUploadPost(false);
    };
    fetchPostList();
  }, [boardname]);

  // console.log("board data: ", posts);

  function formatDate(createdAt) {
    const date = new Date(createdAt);

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  return (
    <Wrapper>
      <Contents>
        <Left>
          <BoardTitle>{boardTitle}</BoardTitle>
          <Hot>
            {" "}
            <img src={fireIcon} alt="불 아이콘"></img>
            <Topic>함께 지어져가는 존재인 '우리'</Topic>
          </Hot>
          {!showUploadPost && (
            <UploadNewPost onClick={handleClickUpload}>
              새 글을 작성해주세요! <img src={penIcon} alt="펜 아이콘"></img>
            </UploadNewPost>
          )}
          {showUploadPost && <UploadPost />}
          {posts &&
            posts.map((post, index) => (
              <Link
                key={post.id}
                style={{ textDecoration: "none", color: "black" }}
                to={`/board/${boardTitle}/post/${post.id}`}
              >
                <Post key={index}>
                  <PostTitle>{post.title}</PostTitle>
                  <PostContent>
                    {post.content.length > 50
                      ? `${post.content.slice(0, 50)}...`
                      : post.content}
                  </PostContent>
                  <PostInfo>{formatDate(post.createdAt)} | 익명</PostInfo>
                </Post>
              </Link>
            ))}
          <LeftBottom>
            <NextPageBtn>다음</NextPageBtn>
          </LeftBottom>
        </Left>
        <HotBoard />
      </Contents>
    </Wrapper>
  );
}

export default BoardMain;

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

const Hot = styled.div`
  height: 80px;
  border: 1px solid #c2c1c1;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  img {
    margin-left: 10px;
    height: 30px;
  }
`;

const Topic = styled.div`
  height: 45px;
  width: 160px;
  border-radius: 15px;
  background-color: #ffebeb;
  margin-left: 10px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 12px;
  color: #424242;
  cursor: pointer;
`;

const UploadNewPost = styled.div`
  height: 55px;
  border: 2px solid #cccccc;
  margin-bottom: 8px;
  background-color: #f0f0f0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  font-size: 14px;
  color: #a09f9f;
  cursor: pointer;

  img {
    height: 20px;
    margin-right: 20px;
    filter: opacity(0.5) drop-shadow(0 0 0 #d1d1d1);
  }
`;

const Post = styled.div`
  height: 105px;
  border: 0.5px solid #c2c1c1;
  padding-left: 20px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const PostTitle = styled.div`
  padding-top: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  cursor: pointer;
`;

const PostContent = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;

const PostInfo = styled.div`
  font-size: 12px;
  color: #565656;
`;

const LeftBottom = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: right;
`;

const NextPageBtn = styled.div`
  cursor: pointer;
  border: 1.3px solid #f92626;
  border-radius: 2px;
  color: #f92626;
  font-weight: 600;
  height: 40px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
