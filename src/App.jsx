import { useState } from "react";
import { Routes, Route } from "react-router";
import ArticleExplorer from "./Components/ArticleExplorer";
import ArticlePage from "./Components/ArticlePage";
import { UserAccountProvider } from "./contexts/User";
import Nav from "./Components/Nav";
import { NavSettingsProvider } from "./contexts/NavSettings";

function App() {
  return (
    <>
      <NavSettingsProvider>
        <UserAccountProvider>
          <Routes>
            <Route path="/topic?" element={<ArticleExplorer />}></Route>
            <Route path="/:article_id" element={<ArticlePage />}></Route>
            <Route
              path="/*"
              element={
                <p className="text-black">404: This page doesn't exist D:</p>
              }
            ></Route>
          </Routes>
          <Nav />
        </UserAccountProvider>
      </NavSettingsProvider>
    </>
  );
}

export default App;
