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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            const usersResponse = await services.getUserList();
            setUserListData(usersResponse.data);

            const transactionsResponse = await services.getTransactionList();
            setTransactionListData(transactionsResponse.data);

            const coursesResponse = await services.getCourseList();
            setCourseListData(coursesResponse.data.data);

            const revenueYearlyData = await services.getRevenueYearly(new Date().getFullYear());
            setRevenueYearlyData(revenueYearlyData.data);
            setLoading(false);
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
        <LoadingOverlayWrapper
            active={loading}
            spinner
            text="Loading..."
            className={'overlay'}
            styles={{
                overlay: (base) => ({
                    ...base,
                    background: 'white',
                    color: 'black',
                }),
                spinner: (base) => ({
                    ...base,
                    width: '65px',
                    '& svg circle': {
                        stroke: 'black',
                    },
                }),
            }}
        >
            {!loading ? (
                <Router>
                    <Routes>{renderRoutes()}</Routes>
                </Router>
            ) : (
                <></>
            )}
        </LoadingOverlayWrapper>
    );
}

export default App;
