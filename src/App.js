import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '~/components/SideBar';
import TopBar from '~/components/TopBar';
import Home from '~/pages/Home';
import User from '~/pages/User';
import NewUser from '~/pages/NewUser';
import UserList from '~/pages/UserList';
import CourseList from '~/pages/CourseList';
import Course from '~/pages/Course';
import NewCourse from '~/pages/NewCourse';
import TransactionList from '~/pages/TransactionList';

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
                    <Route path="/course/:courseId" element={<Course />} />
                    <Route path="/newCourse" element={<NewCourse />} />
                    <Route path="/courses" element={<CourseList />} />
                    <Route path="/transactions" element={<TransactionList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
