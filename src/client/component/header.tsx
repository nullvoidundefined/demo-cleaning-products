import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { APPLICATION, COLOR } from "../constant";

const HeaderContainer = styled.div`
  align-items: center;
  background-color: ${COLOR.GRAYSCALE_LIGHTEST};
  border-radius: 0 0 4px 4px;
  display: flex;
  height: ${APPLICATION.HEADER_HEIGHT}px;
  text-decoration: none;

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: ${COLOR.GRAYSCALE_DARKEST};
    text-decoration: none;
  }
`;

const CompanyName = styled.span`
  font-weight: 600;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer className="mb-3 p-3">
      <Link to="home">
        <CompanyName>The Rounds</CompanyName>
      </Link>
    </HeaderContainer>
  );
};

export { Header };
