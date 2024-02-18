import React from 'react';
import ProductCard from './ProductCard'; // Create a ProductCard component for each product
import img1 from '../assets/images/bracelet.jpg'
import '../assets/css/shop/Shop.css'
import img2 from "../assets/images/neck.jpg"
import img3 from '../assets/images/fff.jpg';
import img4 from '../assets/images/r.jpg';
import img5 from '../assets/images/ww.jpg';
import img6 from '../assets/images/ee.jpg';
import img7 from '../assets/images/as.jpg';
import img8 from '../assets/images/cufflinks.jpg';



const products = [
  {
    id: 1,
    name: 'Elegant Diamond Necklace',
    image: img1 ,
    price: '$499.99',
  },
  {
    id: 2,
    name: 'Sapphire and Diamond Ring',
    image: img2,
    price: '$699.99',
  },
  {
    id: 1,
    name: 'Elegant Diamond Necklace',
    image: img3 ,
    price: '$499.99',
  },
  {
    id: 2,
    name: 'Sapphire and Diamond Ring',
    image: img4,
    price: '$699.99',
  },
  {
    id: 1,
    name: 'Elegant Diamond Necklace',
    image: img5 ,
    price: '$499.99',
  },
  {
    id: 2,
    name: 'Sapphire and Diamond Ring',
    image: img6,
    price: '$699.99',
  },
  {
    id: 1,
    name: 'Elegant Diamond Necklace',
    image: img7 ,
    price: '$499.99',
  },
  {
    id: 2,
    name: 'Sapphire and Diamond Ring',
    image: img8,
    price: '$699.99',
  },
  // Add more product entries as needed
];

const Shop = () => {
  return (
    <div className="shop-page">
      <h2>Explore Our Collection</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
