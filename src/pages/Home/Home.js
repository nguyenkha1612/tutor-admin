import className from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import Chart from '~/components/Chart';
import FeaturedInfo from '~/components/FeatureInfo';
import WidgetLg from '~/components/WidgetLg';
import WidgetSm from '~/components/WidgetSm';
import LoadingOverlay from 'react-loading-overlay-ts';
import styles from './Home.module.scss';

const cx = className.bind(styles);

const widgetLgCol = ['Khách hàng', 'Ngày giao dịch', 'Số tiền', 'Trạng thái'];

export default memo(function Home({
    transactionListData = [],
    courseListData = [],
    userListData = [],
    revenueYearlyData = [],
}) {
    const [revenueYearly, setRevenueYearly] = useState([]);
    const [featureData, setFeatureData] = useState([]);
    const [userList, setUserList] = useState([]);
    const [transactionList, setTransactionList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleData = () => {
            let currencyRate = Number(process.env.REACT_APP_CURRENCY_RATE);

            let currentDate = new Date();
            let lastMonth = new Date();

            lastMonth.setMonth(currentDate.getMonth() - 1);
            lastMonth = lastMonth.getMonth();

            let revenue = [];
            let revenueThisMonth;
            let revenueLastMonth;

            revenueYearlyData.forEach((data) => {
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

            let newCoursesThisMonth = 0;
            let newCoursesLastMonth = 0;
            courseListData.forEach((course) => {
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

            let transactionsThisMonth = 0;
            let transactionsLastMonth = 0;

            transactionListData.forEach((transaction) => {
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

            const sortedTransactionList = [...transactionListData];
            setTransactionList(
                sortedTransactionList
                    .sort(function (a, b) {
                        return b.createdAt - a.createdAt;
                    })
                    .slice(0, 5),
            );

            setFeatureData(feature);

            const sortedUserList = [...userListData];
            setUserList(
                sortedUserList
                    .sort(function (a, b) {
                        return b.createdAt - a.createdAt;
                    })
                    .slice(0, 5),
            );
        };

        if (
            transactionListData.length > 0 &&
            revenueYearlyData.length > 0 &&
            courseListData.length > 0 &&
            userListData.length > 0
        ) {
            handleData();
            setLoading(false);
        }
    }, [courseListData, revenueYearlyData, transactionListData, userListData]);

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
            {!loading ? (
                <div className={cx('homeWrapper')}>
                    <FeaturedInfo data={featureData} />
                    <Chart data={revenueYearly} title="Phân tích doanh thu" grid dataKey="Doanh thu" />
                    <div className={cx('homeWidgets')}>
                        <WidgetSm data={userList} />
                        <WidgetLg title={'Giao dịch gần nhất'} data={transactionList} col={widgetLgCol} />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </LoadingOverlay>
    );
});
