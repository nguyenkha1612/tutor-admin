import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '~/components/SideBar';
import TopBar from '~/components/TopBar';
import Home from '~/pages/Home';
import User from '~/pages/User';
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
// import ProductList from "./pages/productList/ProductList";
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";

function App() {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/home" element={<User />} />
        //     </Routes>
        // </Router>

        <Router>
            <TopBar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    {/* <Route path="/users"><UserList /></Route>
            <Route path="/user/:userId"><User /></Route>
            <Route path="/newUser"><NewUser /></Route>
            <Route path="/products"><ProductList /></Route>
            <Route path="/product/:productId"><Product /></Route>
            <Route path="/newproduct"><NewProduct /></Route> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
