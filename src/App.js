import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import MainPage from "./pages/mainPage";
import ProductPages from "./pages/productPages";
import BookDetail from "./pages/bookDetail";
import UndefinedPage from "./pages/undefinedPage";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* componentleri browserRouter kısımının içinde yazabiliriz, routes ve route içinde sadece yol yazabiliriz örn: burada anasayfanın yolunu verdik  <Route path='/' element={<MainPage />} />*/}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/books' element={<ProductPages />} />
        <Route path='/books/:bookId' element={<BookDetail />} />{" "}
        {/* burası dinamik yol belirleme şekli tıklanan her kitabın id si ekrana basılıyor  */}
        {/* tanımlanmayan yol ya da sayfa  */}
        <Route path='*' element={<UndefinedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
