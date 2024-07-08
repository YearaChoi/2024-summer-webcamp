import React from "react";
import styled from "styled-components";

function Book({ image, title, price }) {
  return (
    <Wrapper>
      <BookImg style={{ backgroundImage: `url(${image})` }}></BookImg>
      <Title>{title}</Title>
      <Price>{price}</Price>
    </Wrapper>
  );
}

export default Book;

const Wrapper = styled.div`
  border: 0.9px solid #c2c1c1;
  width: 140px;
`;

const BookImg = styled.div`
  background-size: cover;
  height: 70%;
  cursor: pointer;
`;

const Title = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 13px;
  height: 30px;
`;

const Price = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 13px;
  color: #e90909;
`;
