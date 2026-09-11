import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Book from "./pages/Book";
import Dispatch from "./pages/Dispatch";
import Listen from "./pages/Listen";
import Reading from "./pages/Reading";
import Archive from "./pages/Archive";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "articles", Component: Articles },
      { path: "articles/:slug", Component: ArticleDetail },
      { path: "book", Component: Book },
      { path: "dispatch", Component: Dispatch },
      { path: "listen", Component: Listen },
      { path: "reading", Component: Reading },
      { path: "archive", Component: Archive },
    ],
  },
]);
