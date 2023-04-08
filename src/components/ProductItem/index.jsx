import React from 'react';
import { useBook } from '../../context/BookContext';

export default function ProductItem({ book }) {
  const { setSelectedBook, setOpenPreviewModal } = useBook();
  return (
    <div
      key={book.id}
      className='group relative cursor-pointer'
      onClick={() => {
        setOpenPreviewModal(true);
        setSelectedBook(book);
      }}
    >
      <div className='min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo?.title}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text- text-gray-700'>
            <p>
              <span aria-hidden='true' className='absolute inset-0' />
              {book.volumeInfo?.title}
            </p>
          </h3>
          {book.volumeInfo.authors &&
            book.volumeInfo.authors.map((name) => (
              <p key={name} className='mt-1 text-sm text-gray-500'>
                {name}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
