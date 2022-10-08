import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Chat from "./Chat";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import Login from "./Login";
import LoadingPage from "./LoadingPage";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";

function App() {
  const [user, authLoading] = useAuthState(auth);
  const [channels, dbLoading, error] = useCollection(collection(db, "rooms"));
  // const user = useSelector(selectUser);

  if (authLoading || dbLoading) return <LoadingPage />;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Chat />
            <Outlet />
          </AppBody>
        </>
      )}
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
