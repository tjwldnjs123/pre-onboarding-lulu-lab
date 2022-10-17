import React from "react";
import styled from "styled-components";
import HeaderLogo from "../assets/lululab.png";

const Container = (props) => {
  return (
    <ContainerBox>
      <div className="inner-container">
        <div className="header">
          <img src={HeaderLogo} alt="lululab-logo" />
        </div>
        {props.children}
      </div>
    </ContainerBox>
  );
};

const ContainerBox = styled.div`
  max-width: ${({ theme }) => theme.tablet};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .inner-container {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    @media (max-width: ${({ theme }) => theme.iPhone}) {
      box-shadow: none;
    }

    .header {
      padding: 20%;

      img {
        width: 330px;
        height: 70px;

        @media (max-width: ${({ theme }) => theme.iPhone}) {
          width: 200px;
          height: 50px;
        }
      }
    }
  }
`;

export default Container;
