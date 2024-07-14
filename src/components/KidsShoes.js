import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import './styles.css';

const KidsShoes = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (item) => {
      addToCart(item);
    };

  const [shoes] = useState([
    { id: 1, name: 'Spider man sneakers', price: 'Ksh.1,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdyBJmv7S-262Ez9EjMP_-gJ993XNPizcfHQ&s' },
    { id: 2, name: 'Trainers', price: 'Ksh.700', img: 'https://www.citywalk.co.ke/wp-content/uploads/2024/01/KD1605-3-copy-500x500.jpg' },
    { id: 3, name: 'Canvas', price: 'Ksh.700', img: 'https://images-na.ssl-images-amazon.com/images/I/41NN-JylS7L.jpg' },
    { id: 4, name: 'Jordans', price: 'Ksh.900', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXEFTeswAqDyOT4RnTqOgrfOkUbumJcOtQw&s' },
    { id: 5, name: 'Girls Canvas', price: 'Ksh.1200', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zeu93rM1X1ru1AW--UpsSYTRoD9_JCVRLQ&s' },
    { id: 6, name: 'PU leather sneakers', price: 'Ksh.1400', img: 'https://m.media-amazon.com/images/I/81AY+9xBiJL._AC_UY1000_.jpg' },
    { id: 7, name: 'Boys sandals', price: 'Ksh.300', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqE6ADC6ebzmdjTOe3ry-j7WvaTuKcCua0g&s' },
    { id: 8, name: 'Girls Sandals', price: 'Ksh.1250', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbZILpX1fIa3mt87C1w4pjXe4pEHz_M-Iow&s' },
    { id: 9, name: 'Rain boots', price: 'Ksh.1500', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61AO9SeP5eHQsL-CHnynCET0iPJIurfRDVQ&s' },
    { id: 10, name: 'Retro kids shoes', price: 'Ksh.1500', img: 'https://umoja.africa/cdn/shop/files/buggies-retro-kids-shoes-silver-386469_300x_crop_center.jpg?v=1716879358' },
    { id: 11, name: 'Sambas', price: 'Ksh.1500', img: 'https://images.footlocker.com/is/image/EBFL2/IE3680?wid=200&hei=200&fmt=jpg-alpha' },
    { id: 12, name: 'Boy laced shoes', price: 'Ksh.1700', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ah-doH4QE8pi8g8bYKyzsfLxQk3JMVJHfg&s' },
    { id: 13, name: 'Lightning mcqueen', price: 'Ksh.1500', img: 'https://cdn.media.amplience.net/i/scvl/158569_346503_1?fmt=auto&w=640' },
    { id: 14, name: 'Baby rubber sneakers', price: 'Ksh.1500', img: 'https://www.campusshoes.com/cdn/shop/products/T_J-07V_T_J-07_S.GRN-ORG_2.jpg?v=1670325365' },
    { id: 15, name: 'Crocs', price: 'Ksh.1500', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolDeMpjC6vRoDXAMphXNezuW0AVYaZI578Q&s' },
    { id: 16, name: 'Old navy sandals', price: 'Ksh.1500', img: 'https://previews.123rf.com/images/popovaphoto/popovaphoto1701/popovaphoto170100145/70837224-child-s-sandals-on-white-background.jpg' },
    { id: 17, name: 'Girls dress shoes', price: 'Ksh.1500', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVFVOSMS6A4HcK6DXvWaEI7MzROB3w80NbIw&s' },
    { id: 18, name: 'Beach shoes', price: 'Ksh.1500', img: 'https://www.coastwatersports.com/images/products/Cressi-Pulpy-Kids-Beach-Aqua-Shoes--Pink.jpg' },
    { id: 19, name: 'Play shoes', price: 'Ksh.1500', img: 'https://m.media-amazon.com/images/I/61mv9-qVVEL._AC_SL1000_.jpg' },
    { id: 20, name: 'Sneakers', price: 'Ksh.1500', img: 'https://m.media-amazon.com/images/I/61Rzix0aSnL._AC_UL1200_.jpg' },
    { id: 21, name: 'Paw patrol sneakers', price: 'Ksh.1500', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F-e1s2_upVWbAR6OuGLUe_TU1p-PqydG9w&s' },
  ]);


  return (
    <div className="shoes-container">
      <h2>Kids' Shoes</h2>
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

export default KidsShoes;
