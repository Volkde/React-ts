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

function Facebook() {
    
  return (

    <CompanyContainer>

      <CompanyTitle>Facebook</CompanyTitle>
      <CompanyDescription>

        Мы уже больше 5 лет поставляем ручки с логотипами для их офиса

      </CompanyDescription>
    </CompanyContainer>
  );
}

export default Facebook;