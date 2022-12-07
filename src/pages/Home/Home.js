import className from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import Chart from '~/components/Chart';
import FeaturedInfo from '~/components/FeatureInfo';
import WidgetSm from '~/components/WidgetSm';
import WidgetLg from '~/components/WidgetLg';

import * as services from '~/services/services';

import styles from './Home.module.scss';

const cx = className.bind(styles);

export default memo(function Home() {
    const [revenueYearly, setRevenueYearly] = useState([]);
    const [featureData, setFeatureData] = useState([]);
    const [userList, setUserList] = useState([]);
    const [transactionList, setTransactionList] = useState([]);

    useEffect(() => {
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
            feature.push({
                title: 'Doanh thu',
                currentQuantity: revenueThisMonth * currencyRate,
                unit: 'VNĐ',
                quantityRate: Math.round((revenueThisMonth / revenueLastMonth - 1) * 100 * 100) / 100,
                quantityRateUnit: '%',
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
                unit: 'lớp',
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
                unit: 'giao dịch',
                quantityRate: transactionsThisMonth - transactionsLastMonth,
                quantityRateUnit: ' giao dịch',
                featuredSub: 'So với tháng trước',
            });

            let transactionsSorted = transactionRes.data.sort(function (a, b) {
                return b.createdAt - a.createdAt;
            });

            for (let i = 0; i < transactionsSorted.length; i++) {
                let userInfo = await services.getUserById(transactionsSorted[i].userId);
                if (userInfo != null)
                    transactionsSorted[i] = {
                        ...transactionsSorted[i],
                        userInfo: userInfo.data,
                    };
            }

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
    }, []);

    return (
        <div className={cx('homeWrapper')}>
            <FeaturedInfo data={featureData} />
            <Chart data={revenueYearly} title="Phân tích doanh thu" grid dataKey="Doanh thu" />
            <div className={cx('homeWidgets')}>
                <WidgetSm data={userList} />
                <WidgetLg data={transactionList} />
            </div>
        </div>
    );
});
