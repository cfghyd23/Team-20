import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import {useState} from "react"
import { Route, Routes } from 'react-router-dom';
import AuthPage from "./pages/AuthPage";


const products = [
  {
    id: "B1",
    name: "Desi Chai",
    price: 100,
    desc: "A fragrant blend of aromatic spices and tea, brewed to perfection and served with a touch of sweetness.",
    imagee: "https://i.redd.it/wdlo2ma8q6u21.jpg",
  },
  {
    id: "B2",
    name: "Ice Tea",
    price: 250,
    desc: "Refreshing and cool, our iced tea is a perfect balance of freshly brewed tea and a hint of citrus, served over ice for a revitalizing experience.",
    imagee: "https://www.whiskaffair.com/wp-content/uploads/2021/01/Apple-Iced-Tea-2-3.jpg",
  },
  {
    id: "B3",
    name: "Latte",
    price: 200,
    desc: "Indulge in a creamy and velvety espresso-based drink, expertly crafted with steamed milk and a touch of froth for a smooth and satisfying coffee experience.",
    imagee: "https://www.roastycoffee.com/wp-content/uploads/mBPxUtTx-720x540.jpeg",
  },
  {
    id: "B4",
    name: "Mocha",
    price: 300,
    desc: "A delightful fusion of rich espresso, velvety chocolate, and steamed milk, creating a luscious and decadent coffee beverage that will satisfy your cravings.",
    imagee: "https://athome.starbucks.com/sites/default/files/2021-06/1_CAH_CaffeMocha_Hdr_2880x16602.jpg",
  },
  
];
function App()
{
  const [receivedState, setReceivedState] = useState('');

  const handleReceiveState = (state) => {
    setReceivedState(state); // Update the receivedState
  };

  
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
          <Route index element={<Home sendState={handleReceiveState} products={products} />} />
          <Route path="cart" element={<Cart cartElements = {receivedState} products={products} />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="order" element={<AuthPage />} />
      </Route>
    </Routes>
  )

}

export default App