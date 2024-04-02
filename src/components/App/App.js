import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../HeaderComponents/Header/header";
import { ItemDetailContainer } from "../ItemDetailComponents/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../ItemListComponents/ItemListContainer/itemListContainer";
import "./App.scss";
import { Footer } from "../Footer/Footer";
import { CartProvider } from "../../context/CartContext";
import { CartContainer } from "../CartComponents/CartContainer/CartContainer";

function App() {
  return (
    <div className="App">
        <CartProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/:routeParam1" element={<ItemListContainer />} />
              <Route path="/:routeParam1/:routeParam2"element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
