import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import './styles.css';

const MensShoes = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (item) => {
      addToCart(item);
    };
  const [shoes] = useState([
    { description: 'brown buckle leather shoes', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3L0Dy_c_z_07M2MF9QnRu-Rutt2nGnY2acA&s' },
    { description: 'brown boots', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCv1GB3m4X1k3mXcDB6Ya-gbP6vKKBRktFdQ&s' },
    { description: 'black leather shoes', price: 'Ksh.1,000', img: 'https://m.media-amazon.com/images/I/51WpZbC4dsL._AC_SL1200_.jpg' },
    { description: 'brown PU leather shoes', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjw3Jg5L8MkaQG03udOWM_QbMc2N8SBJwlYQ&s' },
    { description: 'Air Jordans', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwW-j7QbIfIuvY4N_lMHpAtQ33cLWH1MeZw&s' },
    { description: 'Gold shoes', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvawzLu_2xiFa0hXOlNC5RsCuah6XpYsvAw&s' },
    { description: 'Whit slip ons', price: 'Ksh.1,000', img: 'https://m.media-amazon.com/images/I/61-XASRWbUL._AC_UY900_.jpg' },
    { description: 'brown heavy duty shoes', price: 'Ksh.1,000', img: 'https://www.fifecountry.co.uk/images/product_images/main_5698.jpg' },
    { description: 'Timberland', price: 'Ksh.1,000', img: 'https://images.timberland.com/is/image/timberland/A5VJN804-HERO?hei=650&wid=650&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0' },
    { description: 'Adidas running shoes', price: 'Ksh.1,000', img: 'https://rukminim2.flixcart.com/image/850/1000/kg9qbgw0-0/shoe/u/4/0/fw8414-6-adidas-gretwo-ngtmet-grethr-original-imafwjvarcgqhg6z.jpeg?q=20&crop=false' },
    { description: 'Adidas running shoes2', price: 'Ksh.1,000', img: 'https://http2.mlstatic.com/D_NQ_NP_846805-MLC30019405708_042019-O.webp' },
    { description: 'Mens casual shoes', price: 'Ksh.1,000', img: 'https://www.famousfootwear.com/blob/product-images/20000/36/91/3/36913_pair_medium.jpg' },
    { description: 'Mens laced shoes', price: 'Ksh.1,000', img: 'https://m.media-amazon.com/images/I/7188bCCkBdL._AC_UY900_.jpg' },
    { description: 'Hiking shoes', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABH4iguiUjWK7J0vl83yoB_EP5LELHrRADb07M0ylOB4I3vpl4FdUpw-QojTMZ6LAGPc&usqp=CAU' },
    { description: 'brown loafers', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwYS2tS7OfLb47qgXuxCbvSLw8-XvRZpU-Q&s' },
    { description: 'Description 16', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGmO2-025jDx3357fEz6B_HmLjdt2-MVj9sxihCHacDoyRV5XSGq9n4U_T_zNBURqsgk&usqp=CAU' },
    { description: 'Description 17', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbuh9SXreO3ck9JmT0ivYShhbb_d0uKCNV2NGP_GMfsvGpiD9shszXutWJkbAwdymR4A&usqp=CAU' },
    { description: 'Description 18', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoviuYY0m0n-3Pb6Xb52WCNSkBejWkdf4KM39UpWN0jbcfksUJ19lrXLFuwVXA01G61I&usqp=CAU' },
    { description: 'Description 19', price: 'Ksh.1,000', img: 'https://cdn.shopify.com/s/files/1/1974/6675/products/sperry-mens-authentic-original-leather-boat-shoe-sahara-tan-404233301017-758343_1200x600_crop_center.jpg' },
    { description: 'Description 20', price: 'Ksh.1,000', img: 'https://www.dmarge.com/wp-content/uploads/2020/08/Aurelien-Light-Blue-Suede-Yacht-Loafer-v2.jpg' },
    { description: 'Description 21', price: 'Ksh.1,000', img: 'https://i8.amplience.net/s/scvl/92145_177051_SET/1?fmt=auto' }
  ]);


  return (
    <div className="shoes-container">
      <h2>Men's Shoes</h2>
      <div className="shoes-grid">
        {shoes.map((shoe, index) => (
          <div key={index} className="shoe-box">
            <img src={shoe.img} alt={shoe.description} />
            <div className="shoe-details">
              <div>{shoe.description}</div>
              <div>Price: {shoe.price}</div>
              <button onClick={() => handleAddToCart(shoe)}>Add to Cart</button>            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MensShoes;

