import React from "react";
import styled from "styled-components";
import star5 from "../assets/icons/star5.png";
import star4 from "../assets/icons/star4.png";

function HotBoard() {
  return (
    <Wrapper>
      <Popular>
        <Top>
          <Title>실시간 인기 글</Title>
        </Top>
        <PopularPost>
          <Text>내가 교수께 여짜오되</Text>
          <TextDetail>
            둘째 시험이 끝난 후에 내가 교수께 여짜오되 <br /> 교수여 내게 아직
            시험이 남았사오니 내가..
          </TextDetail>
        </PopularPost>
        <PopularPost>
          <Text>한동을 알리고 싶습니다.</Text>
          <TextDetail>
            한동대학교를 전세계로 알리고 싶습니다. <br /> 여러분의 재밌는
            아이디어를 공유해주세..
          </TextDetail>
        </PopularPost>
      </Popular>
      <Hot>
        <Top>
          <Title>Hot 게시물</Title>
          <MoreInfo>더보기</MoreInfo>
        </Top>
        <HotPost>후배분들께 이력서 관련하여 말씀드립니다</HotPost>
        <HotPost>함께 지어져가는 존재인 '우리'</HotPost>
        <HotPost>하루만 기다리면 종강이에요!</HotPost>
        <HotPost>솔직히 누가 말해줬으면..</HotPost>
      </Hot>
      <Best>
        <Top>
          <Title>Best 게시판</Title>
          <MoreInfo>더보기</MoreInfo>
        </Top>
      </Best>
      <Lecture>
        <Top>
          <Title>최근 강의평</Title>
          <MoreInfo>더보기</MoreInfo>
        </Top>
        <LecturePost>
          <img src={star5} alt="5점"></img>
          <Text>소프트웨어 입문 : 박지현</Text>
          <TextDetail>
            교수님 너무 좋으십니다. <br /> 학생들이 많아도 시간을 많이
            써주시는게 느껴져요.
          </TextDetail>
        </LecturePost>
        <LecturePost>
          <img src={star5} alt="5점"></img>
          <Text>C 프로그래밍 : 김호준</Text>
          <TextDetail>
            역시 C프는 호준김교수님입니다! <br /> 어렵더라도 이거 못하면
            안된다는 마인드로 하면 충분히 따라가요.
          </TextDetail>
        </LecturePost>
        <LecturePost>
          <img src={star4} alt="4점"></img>
          <Text>데이타구조 : 김영섭</Text>
          <TextDetail>
            제대로 데이터 구조를 배울 수 있음 <br />
            근데 정말 미리미리 해야함.
          </TextDetail>
        </LecturePost>
      </Lecture>
    </Wrapper>
  );
}

export default HotBoard;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  width: 330px;
  margin-left: auto;
`;

const Popular = styled.div`
  border: 0.9px solid #8c8c8c;
  background-color: #f6f5f5;
  width: 100%;
  height: 170px;
  border-bottom: none;
`;

const PopularPost = styled.div`
  border-bottom: 0.9px solid #8c8c8c;
  cursor: pointer;
  height: 57px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const Hot = styled.div`
  margin-top: 10px;
  border: 0.9px solid #8c8c8c;
  background-color: #f6f5f5;
  width: 100%;
  height: 183px;
  border-bottom: none;
`;

const HotPost = styled.div`
  border-bottom: 0.9px solid #8c8c8c;
  cursor: pointer;
  height: 35px;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  &:hover {
    background-color: #f9f9f9;
  }
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
  height: 330px;
  border-bottom: none;
`;

const LecturePost = styled.div`
  border-bottom: 0.9px solid #8c8c8c;
  cursor: pointer;
  height: 96px;

  &:hover {
    background-color: #f9f9f9;
  }

  img {
    height: 12px;
    margin-left: 10px;
    margin-top: 10px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  height: 40px;
  border-bottom: 0.9px solid #8c8c8c;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #2052c8;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
  margin-top: 7px;
`;

const TextDetail = styled.div`
  font-size: 12px;
  color: #686868;
  margin-left: 10px;
  margin-top: 3px;
`;

const MoreInfo = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #a9a8a8;
  padding-right: 10px;
  cursor: pointer;
`;
