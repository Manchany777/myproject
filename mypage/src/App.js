import React from "react";
import "./App.css";
import { BrowserRouter , Routes, Route, Router } from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components";
import SideNav from "./SideNav";
import Content from "./Content";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ffffff;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  color: #a7a9be;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: sans-serif;
  margin: 10px auto;
  width: 530px;
`;

function App() {
  return (
      <Layout>
        <GlobalStyle />
        <SideNav />
        <Content />
      </Layout>
  );
}



  export default App;