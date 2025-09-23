import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./components/Base/Base";
import Home from "./pages/Home/Home";
import Animals from "./pages/Animals/Animals";
import Books from "./pages/Books/Books";
import People from "./pages/People/People";
import { FavoriteProvider } from "./context/favoriteContext";

function App() {
  return (
    <>
      <FavoriteProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Base />}>
              <Route index element={<Home />} />
              <Route path="/animais" element={<Animals />} />
              <Route path="/livros" element={<Books />} />
              <Route path="/pessoas" element={<People />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FavoriteProvider>
    </>
  );
}

export default App;
