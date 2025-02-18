import { useState } from "react";
import { Routes, Route } from "react-router";
import ArticleExplorer from "./Components/ArticleExplorer";
import ArticlePage from "./Components/ArticlePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/topic?" element={<ArticleExplorer />}></Route>
        <Route path="/:article_id" element={<ArticlePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
