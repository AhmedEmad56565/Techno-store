/* eslint-disable react-refresh/only-export-components */
//path: http://localhost:5173/

import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Filter, Product, Slider, SubHeader } from '../components';

export default function Home() {
  // FETCHED PRODUCTS
  const fetchedProducts = useLoaderData();

  //FILTERING PRODUCTS STATE
  const [products, setProducts] = useState(fetchedProducts);

  //FILTER PRODUCTS FUNCTIONALITY
  function filterProducts(category) {
    if (category === 'All') {
      setProducts(fetchedProducts);
    } else {
      const filteredProducts = fetchedProducts.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    }
  }

  return (
    <div>
      {/* SLIDER COMPONENT */}
      <Slider />

      {/* SUBHEADER COMPONENT */}
      <SubHeader />

      {/* PRODUCTS CONTAINER */}
      <section className='container'>
        <h2 className='home-header'>products</h2>
        <Filter onFilter={filterProducts} />
        <div className='products-grid'>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

//LOADER FUNCTION TO FETCH ALL PRODUCTS
export async function loader() {
  try {
    const response = await fetch('/api/v1/products');
    return response;
  } catch (error) {
    return error;
  }
}
