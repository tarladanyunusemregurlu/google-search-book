import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState({});
  const [openPreviewModal, setOpenPreviewModal] = useState(false);

  const getBooks = () => {
    let queryNew = query;
    if (query == '') {
      queryNew = 'react';
    }
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${queryNew}&maxResults=40`,
      )
      .then((response) => {
        if (response.data && response.data.items) {
          setBooks(response.data.items);
        } else {
          setBooks([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getBooks();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const value = {
    books,
    query,
    setQuery,
    setSelectedBook,
    selectedBook,
    setOpenPreviewModal,
    openPreviewModal,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export const useBook = () => useContext(BookContext);
