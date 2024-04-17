import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../HeaderComponents/Header/header";
import { ItemDetailContainer } from "../ItemDetailComponents/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../ItemListComponents/ItemListContainer/itemListContainer";
import "./App.scss";
import { Footer } from "../Footer/Footer";
import { CartProvider } from "../../context/CartContext";
import { CartContainer } from "../CartComponents/CartContainer/CartContainer";
import { Checkout } from "../CheckoutComponents/Checkout/Checkout";
import { PathProvider } from "../../context/PathContext";
import { ConfigProvider, FloatButton, Spin } from 'antd';
import { WishlistProvider } from "../../context/WishlistContext";

function App() {
  return (
    <div className="App">
        <CartProvider>
        <WishlistProvider>
        <PathProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/category/:categoryId/brand/:brandId"element={<ItemListContainer />} />
              <Route path="/search/:searchedText"element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
            <ConfigProvider theme={{token: {colorBgElevated: '#85b7e2'}}}>
              <FloatButton.BackTop />
            </ConfigProvider>
            <Footer />
          </BrowserRouter>
        </PathProvider>
        </WishlistProvider>
        </CartProvider>
    </div>
  );
}

export default App;
