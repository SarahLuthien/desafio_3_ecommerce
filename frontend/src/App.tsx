import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ScrollToTop } from "./components/ScrollToTop/ScrollTotop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
