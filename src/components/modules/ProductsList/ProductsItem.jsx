import React from 'react';

const ProductItem = ({ product }) => {
    const {id, name, price, description} = product
  return (
    <>
      <li key={id}>
        <p>{name}</p>
        <p>{price}</p>
        <p>{description}</p>
      </li>
    </>
  );
};

export default ProductItem