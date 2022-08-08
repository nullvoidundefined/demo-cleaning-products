import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components/macro";

import { Header } from "./header";
import { APPLICATION } from "../constant";

const LayoutContainer = styled.div`
  margin: auto;
  min-width: ${APPLICATION.MINIMUM_WIDTH}px;
  margin: 0 100px 0 100px;

  @media (max-width: ${APPLICATION.BREAKPOINT_MEDIUM}px) {
    margin: 0 50px 0 50px;
  }

  @media (max-width: ${APPLICATION.BREAKPOINT_SMALL}px) {
    margin: 0 10px 0 10px;
  }
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export { Layout };
