import React from "react";
import styled from "styled-components";
import { LabelInput } from "../components/common";
import { SubjectBlock } from "../components/blocks";
import { SubjectList } from "../data/SubjectList";

export default function MainPage() {
  return (
    <Section>
      <div className="site-description">
        <h1>Wikibook</h1>
        <p>
          프로그래밍을 학습을 위한 위키북스입니다.
          <br />
          Python과 JavaScript에 관해 학습하거나, 키워드를 검색할 수 있습니다.
        </p>
      </div>
      <LabelInput />

      <div className="subjectWrap">
        {SubjectList &&
          SubjectList.map((data, idx) => (
            <SubjectBlock
              key={idx}
              title={data.title}
              description={data.description}
              href={data.href}
            />
          ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding-top: 17rem;
  padding-bottom: 20rem;

  div.site-description {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;

    h1 {
      font-size: 6.4rem;
      font-weight: bold;
      line-height: 7.6rem;
    }

    p {
      font-size: 2rem;
      text-align: center;
      line-height: 2.4rem;
    }
  }

  div.subjectWrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5rem;
  }

  @media (max-width: 1024px) {
    div.subjectWrap {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
  }
`;
