import React from 'react';
import ProductItem from './ProductsItem';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector(store => store.currentProducts);
  // console.log(products)
  return (
    <ul>
      {products?.map(product => (
        <>
          <ProductItem product={product} />
          <button onClick={''}>Buy</button>
        </>
      ))}
    </ul>
  );
};

export default ProductList;
