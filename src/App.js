/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import LoadingOverlayWrapper from 'react-loading-overlay-ts';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from '~/layouts';
import { privateRoutes, publicRoutes } from '~/routes';
import * as services from '~/services/services';

function App() {
    const auth = useSelector((state) => state.auth);
    const [routes, setRoutes] = useState([]);
    const [transactionListData, setTransactionListData] = useState([]);
    const [courseListData, setCourseListData] = useState([]);
    const [userListData, setUserListData] = useState([]);
    const [revenueYearlyData, setRevenueYearlyData] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            console.log('fetch API');
            const usersResponse = await services.getUserList();
            setUserListData(usersResponse.data);

            const transactionsResponse = await services.getTransactionList();
            setTransactionListData(transactionsResponse.data);

            const coursesResponse = await services.getCourseList();
            setCourseListData(coursesResponse.data.data);

            const revenueYearlyData = await services.getRevenueYearly(new Date().getFullYear());
            setRevenueYearlyData(revenueYearlyData.data);
            // setLoading(false);
            console.log(revenueYearlyData.data);
        };

        fetchApi();
    }, []);

    useEffect(() => {
        if (auth.user) setRoutes(privateRoutes);
        else setRoutes(publicRoutes);
    }, []);

    const renderRoutes = () => {
        const data = { transactionListData, userListData, courseListData, revenueYearlyData };
        return routes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) Layout = route.layout;
            else if (route.layout === null) Layout = Fragment;
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact
                    element={
                        <Layout>
                            <Page {...data} />
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
