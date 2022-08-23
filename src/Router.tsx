import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
