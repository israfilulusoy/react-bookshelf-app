import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  // useeffect ve usestate ile urldeki parametrenin apiye isteğini attık ve gelen cevabı state e aktardık ekrana bastık bilgileri..
  const [bookData, setBookData] = useState(null);
  // useparams anlık olarak urldeki parametreleri alır ve bir obje olarak ekrana basar
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3040/books/${params.bookId}`)
      .then(res => setBookData(res.data));
  }, []);

  if (!bookData) return "Yükleniyor...";

  return (
    <div className='detail-page'>
      <div className='book-detail'>
        <img src={bookData.image} />
        <div className='right'>
          <h1>{bookData.title}</h1>
          <h2>Yazarı : {bookData.author} </h2>
          <p>Yıl : {bookData.year} </p>
          <p>Açıklama : {bookData.description} </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
