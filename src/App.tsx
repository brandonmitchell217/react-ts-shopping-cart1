import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Header } from "./components/Header";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { MemberModal } from "./components/MemberModal";
import teamData from "./data/team.json";
import storeItems from "./data/items.json";
import { ItemModal } from "./components/ItemModal";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route
              path="/member/:id"
              element={<MemberModal data={teamData} />}
            />
            <Route
              path="/store/products/:id"
              element={<ItemModal data={storeItems} />}
            />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
