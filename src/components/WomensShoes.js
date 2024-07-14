import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import './styles.css';

const WomensShoes = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (item) => {
      addToCart(item);
    };
  
  const [shoes] = useState([
    { id: 1, description: 'Description 1', price: 'Ksh.1,000', img: 'https://i8.amplience.net/s/scvl/154393_335046_SET/1?fmt=auto' },
    { id: 2, description: 'Description 2', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7BrgQ-HPeNv26zNmfB9v34PaB0g4Y7uuBVnsXx0WVbfPWF7BmgFouDdktSXyy7azEFA&usqp=CAU' },
    { id: 3, description: 'Description 3', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3S-tgMnt9ItjrwElN35dpTfybIU4oiDWqg&s' },
    { id: 4, description: 'Description 4', price: 'Ksh.1,000', img: 'https://alicemay.ie/wp-content/uploads/2023/05/lena-2-min.jpg' },
    { id: 5, description: 'Description 5', price: 'Ksh.1,000', img: 'https://m.media-amazon.com/images/I/61A0SSsnA5L._AC_UY900_.jpg' },
    { id: 6, description: 'Description 6', price: 'Ksh.1,000', img: 'https://m.media-amazon.com/images/I/61WCQGhSJYL._AC_UY1000_.jpg' },
    { id: 7, description: 'Description 7', price: 'Ksh.1,000', img: 'https://m.media-amazon.com/images/I/61Eh7TrbSgL._AC_SL1500_.jpg' },
    { id: 8, description: 'Description 8', price: 'Ksh.1,000', img: 'https://m.media-amazon.com/images/I/611hWif+jBL._AC_UY1000_.jpg' },
    { id: 9, description: 'Description 9', price: 'Ksh.1,000', img: 'https://www.purebrandsuk.com/images/crocs-jayna-w-black-p3-11851-001-womens-clogs-shoes-p865-1129_image.jpg' },
    { id: 10, description: 'Description 10', price: 'Ksh.1,000', img: 'https://cdn.shopify.com/s/files/1/0525/4863/2739/products/06808701_38_1024x1024.jpg' },
    { id: 11, description: 'Description 11', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3XCQqtv0ftHyZUPP4TYypNu7fTk5LwkZiSA&s' },
    { id: 12, description: 'Description 12', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54YCXU-UkYNJg3wfa_FOm2CdsCK8YIxIURLshMaEbf9qJUQrScyq3wJJU9VegBr7Z-gI&usqp=CAU' },
    { id: 13, description: 'Description 13', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTx8VbeU_I8ZZC3P0iDus2GlMSS32hQjW6h6Oacadq2jbW9TUQWW4id2zCuMWigDmEYnw&usqp=CAU' },
    { id: 14, description: 'Description 14', price: 'Ksh.1,000', img: 'https://i5.walmartimages.com/asr/a755e4b7-d84e-47a7-9515-ae4827397d32.ea73b3e5875f6188d605f6af0786fe07.jpeg' },
    { id: 15, description: 'Description 15', price: 'Ksh.1,000', img: 'https://m.media-amazon.com/images/I/616kUcpbK8L._AC_UY1000_.jpg' },
    { id: 16, description: 'Description 16', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRpfEiPiXVVaCLN4FvrC1hL0OklvKrmMGfCjRSyle7pZgBHQ_rXzFjCEaKe063cfnHKU&usqp=CAU' },
    { id: 17, description: 'Description 17', price: 'Ksh.1,000', img: 'https://aldoshoes.co.uk/cdn/shop/t/1/assets/vralg_nudeslider.jpg?v=69125343684895158231676970968' },
    { id: 18, description: 'Description 18', price: 'Ksh.1,000', img: 'https://www.travelandleisure.com/thmb/9Dzlyqe3ue0Cfdgi0_9R-XgJv6g=/fit-in/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/DREAM-PAIRS-Womens-Chunk-Low-Heel-Pump-Sandals-eaaface4df364c6fa29983f644d8e28d.jpg' },
    { id: 19, description: 'Description 19', price: 'Ksh.1,000', img: 'https://www.stevemadden.ca/cdn/shop/files/STEVEMADDEN_SHOES_AILENE_BLACK-LEATHER.jpg?v=1702327896' },
    { id: 20, description: 'Description 20', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZ0TWwEl3qsEoNrYQzlM2xexhU1PqHi3B0A&s' },
    { id: 21, description: 'Description 21', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndKoQW07g1lHVGS3AGMdYD7QyUYh50mfwb3GRu--ba8RP8dKbHB9cQkl9O6LguZLxiRM&usqp=CAU' },
  ]);


  return (
    <div className="shoes-container">
      <h2>Women's Shoes</h2>
      <div className="shoes-grid">
        {shoes.map((shoe, index) => (
          <div key={index} className="shoe-box">
            <img src={shoe.img} alt={shoe.description} />
            <div className="shoe-details">
              <div>{shoe.description}</div>
              <div>Price: {shoe.price}</div>
              <button onClick={() => handleAddToCart(shoe)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WomensShoes;
