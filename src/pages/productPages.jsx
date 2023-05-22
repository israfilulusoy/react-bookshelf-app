import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";

const ProductPages = () => {
  const [bookState, setBookState] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3040/books")
      .then(res => setBookState(res.data));
  }, []);

  //eğer apiden hala cevap gelmediyse loading yazsın
  if (bookState == null) return "Yükleniyor...";
  return (
    <div>
      <h1>
        KİTAP KURDU <i> (Dünya Klasikleri)</i>
      </h1>
      <div className='cards-container'>
        {/* dizideki her bir obje için ekrana ProductCard basılır.. */}
        {bookState.map(book => (
          <ProductCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ProductPages;
