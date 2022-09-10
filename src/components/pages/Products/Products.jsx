import ProductList from 'components/modules/ProductsList/ProductsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productsFetchOption } from 'redux/Products/products-options';
const Products = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productsFetchOption())
  }, [dispatch])
  return (
    <>
      <ProductList />
    </>
  );
};

export default Products;
