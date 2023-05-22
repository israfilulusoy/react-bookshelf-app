import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <h1 onClick={() => navigate(`/`)}>Kitap Kurdu</h1>
      <div>
        <NavLink to='/'>Anasayfa</NavLink>
        <NavLink to='/books'>Kitaplar</NavLink>
      </div>
    </header>
  );
};

export default Header;

{
  /*
    app.js de Route içerisinde yol vermemiz için öncelikle sayfanın olduğu bu sayfada to ile yolunu vereceğimiz sayfanın adını ana sayfa ise /, başka bir örnek ürünler ise /books şeklinde yapıyoruz aynı isimleri app.js de path kısmında kullanıp sayfanın hızlı kullanımını sağlıyoruz..

    <Link to="/">Anasayfa</Link>
    <Link to="/books">Kitaplar</Link>
    
    ///
    Link kullanımı eğer NavLink olarak yapılırsa otomatik olarak classını aktif yapar o classa tanımlanan bütün css elementleri çalışır kullanımı da bu şekilde .. kullanıcı hangi sayfada ise o sayfanın aktif olmasını renk ile sağlayabiliriz....
     <NavLink to='/'>Anasayfa</NavLink>
     <NavLink to='/books'>Kitaplar</NavLink>
    
    */
}

// 2. kullanım
/* 
  <NavLink to="/" className={({ isActive }) => isActive && 'aktif'}>
          Anasayfa
        </NavLink>
        <NavLink
          to={'/books'}
          className={({ isActive }) => isActive && 'aktif'}
        >
          Kitaplar
        </NavLink>
*/

// 3. kullanım

/*
 <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? 'blue' : 'red' })}
        >
          Anasayfa
        </NavLink>
        <NavLink
          to={'/books'}
          style={({ isActive }) => ({ color: isActive ? 'blue' : 'red' })}
        >
          Kitaplar
        </NavLink>

*/
