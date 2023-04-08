import React from 'react';
import { useBook } from '../context/BookContext';
import ProductItem from './ProductItem';

export default function Product() {
  const { books } = useBook();
  return (
    <div className='bg-white min-h-screen'>
      <div className='mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8'>
        {books.length == 0 && (
          <p className='text-center  text-lg'>
            Sorry, we couldn't find any results for your search query
          </p>
        )}
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {books.length > 0 &&
            books.map((book) => (<ProductItem book={book}/>))}
        </div>
      </div>
    </div>
  );
}
