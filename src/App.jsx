import Product from './components/Product';
import ProductQuickviewModal from './components/ProductQuickviewModal';
import { useBook } from './context/BookContext';

export default function App() {
  const { openPreviewModal } = useBook();
  return (
    <>
      <Product />
      {openPreviewModal && <ProductQuickviewModal />}
    </>
  );
}
