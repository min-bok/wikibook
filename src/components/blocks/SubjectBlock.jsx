import React from "react";
import styled from "styled-components";
import { Btn } from "../common";

export default function SubjectBlock({ title, description, href }) {
  return (
    <Block>
      <h1 className="block-title">{title}</h1>
      <p className="block-description">{description}</p>
      <Btn href={href}>Read More</Btn>
    </Block>
  );
}

SubjectBlock.defaultProps = {
  title: "title",
  description: "description",
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 30rem;
  border: 1px solid #a5a5a5;
  border-radius: 10px;
  padding: 30px 25px;
  align-items: flex-start;
  justify-content: space-between;

  h1.block-title {
    font-size: 3.2rem;
    font-weight: bold;
  }

  p.block-description {
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: #a5a5a5;
  }
`;
