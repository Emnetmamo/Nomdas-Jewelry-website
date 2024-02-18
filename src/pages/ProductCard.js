import React from 'react';

const ProductCard = ({ product }) => {
  const { id, name, image, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
