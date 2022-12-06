/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from '~/layouts';
import { privateRoutes, publicRoutes } from '~/routes';

function App() {
    const auth = useSelector((state) => state.auth);
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        if (auth.user) setRoutes(privateRoutes);
        else setRoutes(publicRoutes);
    }, []);

    const renderRoutes = () => {
        return routes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) Layout = route.layout;
            else if (route.layout === null) Layout = Fragment;
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={
                        <Layout>
                            <Page />
                        </Layout>
                    }
                />
            );
        });
    };

    return (
        <Router>
            <Routes>{renderRoutes()}</Routes>
        </Router>
    );
}

export default App;
