import React from "react";
import styled from "@emotion/styled";

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const CompanyTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CompanyDescription = styled.p`
  font-size: 16px;
  text-align: center;
`;

function Google() {


  return (

    <CompanyContainer>

      <CompanyTitle>Google</CompanyTitle>
      <CompanyDescription>

      Тапочки для ног с логотипом гугл? Леко и тепло, весь офис доволен

      </CompanyDescription>
    </CompanyContainer>
  );
}


export default Google;