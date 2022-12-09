import className from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import Chart from '~/components/Chart';
import FeaturedInfo from '~/components/FeatureInfo';
import WidgetSm from '~/components/WidgetSm';
import WidgetLg from '~/components/WidgetLg';

import * as services from '~/services/services';

import styles from './Home.module.scss';
import LoadingOverlay from 'react-loading-overlay-ts';

const cx = className.bind(styles);

export default memo(function Home() {
    const [revenueYearly, setRevenueYearly] = useState([]);
    const [featureData, setFeatureData] = useState([]);
    const [userList, setUserList] = useState([]);
    const [transactionList, setTransactionList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let currencyRate = Number(process.env.REACT_APP_CURRENCY_RATE);

        let currentDate = new Date();
        let lastMonth = new Date();

        lastMonth.setMonth(currentDate.getMonth() - 1);
        lastMonth = lastMonth.getMonth();

        const fetchApiFeatureInfo = async () => {
            const revenueRes = await services.getRevenueYearly(currentDate.getFullYear());
            let revenue = [];
            let revenueThisMonth;
            let revenueLastMonth;

            revenueRes.data.forEach((data) => {
                revenue.push({
                    name: 'Tháng ' + data.month,
                    'Doanh thu': Number(data.amount) * currencyRate,
                });

                if (data.month - 1 === currentDate.getMonth()) revenueThisMonth = data.amount;
                if (data.month - 1 === lastMonth) revenueLastMonth = data.amount;
            });

            setRevenueYearly(revenue);
            let feature = [];
            let isInfinity = !Number.isFinite(Math.round((revenueThisMonth / revenueLastMonth - 1) * 100 * 100) / 100);
            feature.push({
                title: 'Doanh thu',
                currentQuantity: revenueThisMonth * currencyRate,
                unit: ' VNĐ',
                quantityRate: isInfinity
                    ? (revenueThisMonth - revenueLastMonth) * currencyRate
                    : Math.round((revenueThisMonth / revenueLastMonth - 1) * 100 * 100) / 100,
                quantityRateUnit: isInfinity ? ' VNĐ' : '%',
                featuredSub: 'So với tháng trước',
            });

            const courseRes = await services.getCourseList();
            let courses = courseRes.data.data;

            let newCoursesThisMonth = 0;
            let newCoursesLastMonth = 0;
            courses.forEach((course) => {
                let courseStartDate = new Date(course.classRequirement.dateStart);
                if (courseStartDate.getMonth() === currentDate.getMonth()) newCoursesThisMonth++;
                if (courseStartDate.getMonth() === lastMonth) newCoursesLastMonth++;
            });

            feature.push({
                title: 'Lớp học mới',
                currentQuantity: newCoursesThisMonth,
                unit: ' lớp',
                quantityRate: newCoursesThisMonth - newCoursesLastMonth,
                quantityRateUnit: ' lớp',
                featuredSub: 'So với tháng trước',
            });

            const transactionRes = await services.getTransactionList();

            let transactionsThisMonth = 0;
            let transactionsLastMonth = 0;

            transactionRes.data.forEach((transaction) => {
                let transactionDate = new Date(transaction.createdAt);
                if (transactionDate.getMonth() === currentDate.getMonth()) transactionsThisMonth++;
                if (transactionDate.getMonth() === lastMonth) transactionsLastMonth++;
            });

            feature.push({
                title: 'Số lượt giao dịch',
                currentQuantity: transactionsThisMonth,
                unit: ' giao dịch',
                quantityRate: transactionsThisMonth - transactionsLastMonth,
                quantityRateUnit: ' giao dịch',
                featuredSub: 'So với tháng trước',
            });

            setTransactionList(
                transactionRes.data
                    .sort(function (a, b) {
                        return b.createdAt - a.createdAt;
                    })
                    .slice(0, 5),
            );

            setFeatureData(feature);
        };

        const fetchApiRecentlyUser = async () => {
            const userListRes = await services.getUserList();

            setUserList(
                userListRes.data
                    .sort(function (a, b) {
                        return b.createdAt - a.createdAt;
                    })
                    .slice(0, 5),
            );
        };

        fetchApiFeatureInfo();
        fetchApiRecentlyUser();
        setLoading(false);
    }, []);

    return (
        <LoadingOverlay
            active={loading}
            spinner
            text="Loading..."
            className={cx('overlay')}
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
            <div style={loading ? { display: 'none' } : { display: 'block' }}>
                <div className={cx('homeWrapper')}>
                    <FeaturedInfo data={featureData} />
                    <Chart data={revenueYearly} title="Phân tích doanh thu" grid dataKey="Doanh thu" />
                    <div className={cx('homeWidgets')}>
                        <WidgetSm data={userList} />
                        <WidgetLg data={transactionList} />
                    </div>
                </div>
            </div>
        </LoadingOverlay>
    );
});
