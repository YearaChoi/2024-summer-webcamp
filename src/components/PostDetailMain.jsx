import React, { useState } from "react";
import HotBoard from "./HotBoard";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import penIcon from "../assets/icons/pencil.png";
import personImg from "../assets/icons/personImg.png";
import thumbsBtn from "../assets/icons/thumbsUp.png";
import scrapBtn from "../assets/icons/scrap.png";
import defaultUI from "../assets/icons/DefaultUI.png";
import ModifyPostUI from "./ModifyPostUI";

function PostDetailMain() {
  const { boardTitle } = useParams();
  const [comment, setComment] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleAnonymousChange = () => setIsAnonymous(!isAnonymous);
  const handleCommentChange = (e) => setComment(e.target.value);
  const handleEditPost = () => setIsEditing(true);
  const handleCancelEdit = () => setIsEditing(false);

  const handleDeletePost = () => {
    if (window.confirm("이 글을 삭제하시겠습니까?")) {
      navigate(-1);
    }
  };

  const handleReturnPostList = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Contents>
        <Left>
          <BoardTitle>{boardTitle}</BoardTitle>
          {isEditing ? (
            <ModifyPostUI handleCancelEdit={handleCancelEdit} />
          ) : (
            <>
              <Post>
                <Top>
                  <PostInfo>
                    <UserDefaultImg>
                      <img src={personImg} alt="유저이미지"></img>
                    </UserDefaultImg>
                    <InfoContainer>
                      <UserName>익명</UserName>
                      <UploadTime>07/13 22:02</UploadTime>
                    </InfoContainer>
                  </PostInfo>
                  <AboutPost>
                    <ModifyPost onClick={handleEditPost}>수정</ModifyPost>
                    <DeletePost onClick={handleDeletePost}>삭제</DeletePost>
                  </AboutPost>
                </Top>
                <Middle>
                  <PostTitle>
                    우리학교에서 전자공학 전공하는거 어때요?
                  </PostTitle>
                  <PostContent>
                    우리학교가 SW 컴공 중심대학이라 전자공학은 확실히 컴공에
                    비해 학교 차원에사 지원이 부족한것 같아서 물어봅니다!
                    그래서인지 전자공학과 전공하는 선배님들도 적은것 같구요 ㅠㅠ
                  </PostContent>
                </Middle>
                <Bottom>
                  <Count>
                    {" "}
                    <img src={defaultUI} alt="기본UI이미지"></img>
                  </Count>
                  <PostBtn>
                    <img src={thumbsBtn} alt="좋아요"></img>
                    <img src={scrapBtn} alt="스크랩"></img>
                  </PostBtn>
                </Bottom>
              </Post>
              <UploadComment>
                <Comment
                  placeholder="댓글을 입력하세요"
                  value={comment}
                  onChange={handleCommentChange}
                />
                <CheckboxWrapper>
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={handleAnonymousChange}
                  />
                  <CheckboxLabel>익명</CheckboxLabel>
                </CheckboxWrapper>
                <UploadBtn>
                  <img src={penIcon} alt="펜 아이콘"></img>
                </UploadBtn>
              </UploadComment>
              <ReturnPostListBtn onClick={handleReturnPostList}>
                글 목록
              </ReturnPostListBtn>
            </>
          )}
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

const Top = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const PostInfo = styled.div`
  width: 135px;
  display: flex;
`;

const UserDefaultImg = styled.div`
  margin-left: 15px;
  margin-top: 10px;
  img {
    height: 40px;
    border-radius: 10px;
  }
`;

const InfoContainer = styled.div`
  margin-left: 10px;
`;

const UserName = styled.div`
  margin-top: 14px;
  font-size: 14px;
  font-weight: 600;
`;

const UploadTime = styled.div`
  margin-top: 4px;
  font-size: 13px;
  color: #818080;
`;

const AboutPost = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 12px;
  color: #939393;
  margin-right: 15px;
`;

const ModifyPost = styled.div`
  cursor: pointer;
`;

const DeletePost = styled.div`
  cursor: pointer;
`;

const Middle = styled.div`
  padding-left: 15px;
  padding-top: 5px;
`;

const PostTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const PostContent = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
  margin-right: 20px;
`;

const Bottom = styled.div`
  height: 80px;
  /* border: 1px solid blue; */
`;

const Count = styled.div`
  /* border: 1px solid red; */
  padding-left: 15px;
  img {
    height: 25px;
  }
`;

const PostBtn = styled.div`
  /* border: 1px solid red; */
  padding-left: 15px;
  margin-top: 8px;

  img {
    height: 30px;
    margin-right: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Post = styled.div`
  border: 1px solid #c2c1c1;
  border-bottom: none;
`;

const UploadComment = styled.div`
  height: 40px;
  border: 1px solid #c2c1c1;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
`;

const Comment = styled.textarea`
  resize: none;
  height: 15px;
  width: 80%;
  padding: 12px;
  overflow-y: hidden;
  border: none;
  background-color: #f0f0f0;

  &:focus {
    outline: none;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const CheckboxLabel = styled.label`
  margin-left: 2px;
  font-size: 13px;
  color: #939393;
`;

const UploadBtn = styled.div`
  background-color: #f44336;
  color: white;
  padding: 10px 12px;
  border: none;
  cursor: pointer;
  height: 20px;

  img {
    height: 18px;
    filter: invert();
  }
`;

const ReturnPostListBtn = styled.div`
  cursor: pointer;
  border: 1.3px solid #f92626;
  margin-top: 10px;
  border-radius: 2px;
  color: #f92626;
  font-weight: 600;
  font-size: 15px;
  height: 35px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
