import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1> Kitap Kurdu Sayfasına Hoşgeldiniz.. </h1> <br />
      <h2>
        <Link to={"/books"}>Ürünlerimize</Link> göz atın
      </h2>
    </div>
  );
};

export default MainPage;
