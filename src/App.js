import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import AccountEdit from './Components/AccountEdit';
import AccountEdit_Address from './Components/AccountEdit_Address';
import AccountOrders from './Components/AccountOrders';
import ResetPassword from './Components/ResetPassword';
import Footer from './Components/Footer';
import About from './Components/About';
import AccountWishlist from './Components/AccountWishlist';
import LoginRegister from './Components/LoginRegister.JS';
import Privacy from './Components/Privacy';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path='/header' element={<Header />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/account/adit' element={<AccountEdit />}></Route>
          <Route path='/account/address' element={<AccountEdit_Address />}></Route>
          <Route path='/account/orders' element={<AccountOrders />}></Route>
          <Route path='/reset/password' element={<ResetPassword />}></Route>
          <Route path='/footer' element={<Footer />}></Route>
          <Route path='/accout/wishlist' element={<AccountWishlist />}></Route>
          <Route path='/login/register' element={<LoginRegister />}></Route>
          <Route path='/privacy' element={<Privacy />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
