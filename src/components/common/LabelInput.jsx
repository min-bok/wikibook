import React from "react";
import styled from "styled-components";

export default function LabelInput({ placeholder, labelText }) {
  return (
    <Wrap>
      <input id="search" type="text" placeholder={placeholder} />
      {labelText ? <label htmlFor="search">{labelText}</label> : null}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  input {
    width: 41.5rem;
    padding: 1.6rem 1.5rem;
    font-size: 1.6rem;
    border-radius: 10px;
    border: 1px solid #a5a5a5;
  }

  label {
    font-size: 1.6rem;
  }
`;

LabelInput.defaultProps = {
  placeholder: "검색어를 입력하세요",
  labelText: "문서 전체에서 키워드를 포함하는 문서를 검색합니다.",
};
