import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layouts
import DefaultLayout from "./layout/DefaultLayout";
//Pages
import HomePage from "./pages/Homepage";
import MoviePage from "./pages/MoviePage";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
