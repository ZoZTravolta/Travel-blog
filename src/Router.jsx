import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Blog } from "./components/Blog";
import { BlogItemPage } from "./components/Blog/BlogItemPage";
import { AddBlogItem } from "./components/Blog/AddBlogItem";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogItemPage />} />
      <Route path="/add-post" element={<AddBlogItem />} />
    </Routes>
  );
}
