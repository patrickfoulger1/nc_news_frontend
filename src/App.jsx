import { useState } from "react";
import { Routes, Route } from "react-router";
import ArticleExplorer from "./Components/ArticleExplorer";
import ArticlePage from "./Components/ArticlePage";
import { UserAccountProvider } from "./contexts/UserAccount";

function App() {
  return (
    <>
      <UserAccountProvider>
        <Routes>
          <Route path="/topic?" element={<ArticleExplorer />}></Route>
          <Route path="/:article_id" element={<ArticlePage />}></Route>
        </Routes>
      </UserAccountProvider>
    </>
  );
}

export default App;
