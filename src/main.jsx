import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Layout from './layouts';
import { BookProvider } from './context/BookContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BookProvider>
    <Layout>
      <App />
    </Layout>
  </BookProvider>,
);
