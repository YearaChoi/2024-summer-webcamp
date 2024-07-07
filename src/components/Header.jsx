import React from "react";
import styled from "styled-components";

function Header() {
  return <Wrapper></Wrapper>;
}

export default Header;

const Wrapper = styled.div`
  border: 0.9px solid #c2c1c1;
  background-color: white;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 75px;
  width: 100%;
`;
