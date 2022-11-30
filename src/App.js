import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '~/components/SideBar';
import TopBar from '~/components/TopBar';
import { publicRoutes } from '~/routes';

function App() {
    return (
        <Router>
            <TopBar />
            <div className="container">
                <Sidebar />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
