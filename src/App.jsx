import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <AppBody>
        <Sidebar />
        <h1>Let's build Slack !</h1>
        <Outlet />
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
