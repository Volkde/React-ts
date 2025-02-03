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

function Netflix() {

  return (

    <CompanyContainer>

      <CompanyTitle>Netflix</CompanyTitle>
      <CompanyDescription>
        
      Любите сериалы как и мы сомтрет бесплатно? Тогда у вас должен быть такой же классный клиет как нетфликс, оплату берем подпиской и поп корном
      </CompanyDescription>
    </CompanyContainer>
  );
}

export default Netflix;