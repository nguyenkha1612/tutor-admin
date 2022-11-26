import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '~/components/SideBar';
import TopBar from '~/components/TopBar';
import Home from '~/pages/Home';
import User from '~/pages/User';
import NewUser from '~/pages/NewUser';
import UserList from '~/pages/UserList';
import CourseList from '~/pages/CourseList';

function App() {
    return (
        <Router>
            <TopBar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="/newUser" element={<NewUser />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/courses" element={<CourseList />} />

                    {/* <Route path="/users"><UserList /></Route>
            <Route path="/user/:userId"><User /></Route>
            <Route path="/products"><ProductList /></Route>
            <Route path="/product/:productId"><Product /></Route>
            <Route path="/newproduct"><NewProduct /></Route> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
