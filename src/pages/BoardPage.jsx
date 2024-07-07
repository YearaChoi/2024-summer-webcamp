import React from "react";
import { useParams } from "react-router-dom";

function BoardPage() {
  const { boardTitle } = useParams();

  return <div>{boardTitle}</div>;
}

export default BoardPage;
