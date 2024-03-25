import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../HeaderComponents/Header/header";
import { ItemDetailContainer } from "../ItemDetailComponents/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../ItemListComponents/ItemListContainer/itemListContainer";
import './App.scss';
import { Footer } from "../Footer/Footer";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          
          <Route path='/category/:categoryId/:brand' element={<ItemListContainer />} />

          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
