import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Chat from "./Chat";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <AppBody>
        <Sidebar />
        <Chat />
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
