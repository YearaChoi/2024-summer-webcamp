import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <Contents>
        <CompanyText>비누랩스 주식회사</CompanyText>
        <Text>
          서울특별시 마포구 양화로 113, 5층 | 사업자등록번호 : 407-88-00024 |
          직업정보제공사업 신고번호 : J1204020230008
        </Text>
        <Text>
          이용약관 | <BoldText> 개인정보처리방침 </BoldText> | 청소년보호정책 |
          커뮤니티이용규칙 | 공지사항 | 문의하기 |
          <BoldText> © 에브리타임 </BoldText>
        </Text>
      </Contents>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  height: 190px;
  background-color: #f7f6f6;
`;

const Contents = styled.div`
  width: 800px;
  height: 100%;
  margin-left: 150px;
`;

const CompanyText = styled.div`
  padding-top: 40px;
  font-weight: 600;
  font-size: 15px;
  color: #575757;
`;
const Text = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: #787777;

  &:last-child {
    margin-top: 23px;
    display: flex;
  }
`;

const BoldText = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #535353;
`;
