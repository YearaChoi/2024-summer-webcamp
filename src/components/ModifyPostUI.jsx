import React, { useState } from "react";
import styled from "styled-components";
import penIcon from "../assets/icons/pencil.png";

function ModifyPostUI({ onAddPost, handleCancelEdit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleAnonymousChange = () => setIsAnonymous(!isAnonymous);

  const handleSubmit = () => {
    if (!title.trim()) {
      alert("제목을 입력해 주세요");
      return;
    }

    if (!content.trim()) {
      alert("내용을 입력해 주세요");
      return;
    }

    onAddPost(title, content, isAnonymous);
    setTitle("");
    setContent("");
    setIsAnonymous(true);
  };

  return (
    <Wrapper>
      <PostTitle type="text" value={title} onChange={handleTitleChange} />

      <TextArea value={content} onChange={handleContentChange} />
      <CheckboxWrapper>
        <input
          type="checkbox"
          checked={isAnonymous}
          onChange={handleAnonymousChange}
        />
        <CheckboxLabel>익명</CheckboxLabel>
        <UploadBtn onClick={handleSubmit}>
          <img src={penIcon} alt="펜 아이콘"></img>
        </UploadBtn>
      </CheckboxWrapper>
      <CancelPostBtn onClick={handleCancelEdit}>글 수정 취소</CancelPostBtn>
    </Wrapper>
  );
}

export default ModifyPostUI;

const Wrapper = styled.div`
  height: 500px;
  border: 2px solid #cccccc;
  margin-bottom: 8px;
  color: #a09f9f;
`;

const PostTitle = styled.input`
  padding-left: 15px;
  width: 97.5%;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid #ddd;

  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 95%;
  height: 365px;
  padding: 18px;
  font-size: 13px;
  border: none;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  border-top: 1px solid #e4e4e4;
`;

const CheckboxLabel = styled.label`
  margin-left: 2px;
  margin-right: 15px;
  font-size: 13px;
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

const CancelPostBtn = styled.div`
  cursor: pointer;
  border: 1.3px solid #f92626;
  margin-top: 10px;
  border-radius: 2px;
  color: #f92626;
  font-weight: 600;
  font-size: 15px;
  height: 35px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
