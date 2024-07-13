import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import HotBoard from "./HotBoard";
import penIcon from "../assets/icons/pencil.png";
import fireIcon from "../assets/icons/hot.png";
import UploadPost from "./UploadPost";

function BoardMain() {
  const { boardTitle } = useParams();
  const [showUploadPost, setShowUploadPost] = useState(false);

  const handleClickUpload = () => {
    setShowUploadPost(true);
  };

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "성적 정정",
      content: "교수님이 성적 정정해주신다고 했는데..",
      info: "방금 | 익명",
    },
    {
      id: 2,
      title: "grade >> pf",
      content:
        "grade였는데 pf로 바꿨던 강의면 학점 계산할때 p로 들어가는건가요 a+로 들어가는건가요?",
      info: "5분 전 | 익명",
    },
    {
      id: 3,
      title: "캠퍼스 편의점 장사 미쳤네요",
      content: "기말고사 한 주일 앞둔 시점에 빈소스 발견했어요.",
      info: "17분 전 | 익명",
    },
    {
      id: 4,
      title: "전공 동아리",
      content: "컴퓨터공학과 전공 동아리 추천해주세요!",
      info: "38분 전 | 익명",
    },
    {
      id: 5,
      title: "코딩공부 어떻게 하고 계신가요?",
      content: "자료구조부터 시작해서 어떻게 공부하셨나요?",
      info: "58분 전 | 익명",
    },
    {
      id: 6,
      title: "인공지능 캡스톤 디자인",
      content: "AI 관련 프로젝트 했던 분들 의견 좀 들려주세요!",
      info: "0707 | 익명",
    },
    {
      id: 7,
      title: "제이쿼리 혼자 공부하면 될까요?",
      content:
        "웹 개발을 시작한지 얼마 안 됐는데 제이쿼리는 어떻게 시작해야 할까요?",
      info: "0707 | 익명",
    },
    {
      id: 8,
      title: "대학 생활 추억",
      content: "대학에서 제일 재밌었던 추억을 공유해주세요!",
      info: "0707 | 익명",
    },
    {
      id: 9,
      title: "한동이 제일 조아",
      content: "우리학교 하늘 진짜 예쁜 것 같아요",
      info: "0707 | 익명",
    },
  ]);

  const handleAddPost = (title, content, isAnonymous) => {
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      info: "방금 | " + (isAnonymous ? "익명" : "사용자"),
    };
    setPosts([newPost, ...posts]);
    setShowUploadPost(false);
  };

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
          {showUploadPost && <UploadPost onAddPost={handleAddPost} />}
          {posts.map((post, index) => (
            <Link
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
                <PostInfo>{post.info}</PostInfo>
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
