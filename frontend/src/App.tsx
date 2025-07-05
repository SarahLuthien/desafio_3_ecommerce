import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
          </Routes>
        </Container>
      </main>

      <footer
        style={{
          padding: "20px",
          background: "#f2f2f2",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        FOOTER
      </footer>
    </div>
  );
}

export default App;
