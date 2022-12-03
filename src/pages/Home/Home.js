import className from 'classnames/bind';
import { useEffect, useState } from 'react';

import Chart from '~/components/Chart';
import FeaturedInfo from '~/components/FeatureInfo';
import WidgetSm from '~/components/WidgetSm';
import WidgetLg from '~/components/WidgetLg';

import * as services from '~/services/services';

import styles from './Home.module.scss';

const cx = className.bind(styles);

export default function Home() {
    const [revenueYearly, setRevenueYearly] = useState([]);
    const [featureData, setFeatureData] = useState([]);
    let currencyRate = 23000;
    let currentDate = new Date();
    let revenueThisMonth;
    let revenueLastMonth;
    let quantityRate;

    useEffect(() => {
        const fetchApi = async () => {
            // const info = await services.getUserInfo();
            // console.log('info', info.data.data);

            const revenueRes = await services.getRevenueYearly(currentDate.getFullYear());
            let revenue = [];
            revenueRes.data.forEach((data) => {
                revenue.push({
                    name: 'Tháng ' + data.month,
                    'Doanh thu': Number(data.amount) * currencyRate,
                });

                let lastMonth = new Date(currentDate.getMonth() - 1).getMonth();

                if (data.month - 1 === currentDate.getMonth) revenueThisMonth = data.amount;

                if (data.month - 1 === lastMonth) revenueLastMonth = data.amount;
            });
            setRevenueYearly(revenue);
            console.log(revenueThisMonth, revenueLastMonth);
            quantityRate = (revenueThisMonth / revenueLastMonth - 1) * 100;
            let feature = [];
            feature.push({
                title: 'Doanh thu',
                currentQuantity: revenueThisMonth,
                unit: 'VNĐ',
                quantityRate: quantityRate,
                increase: false,
                featuredSub: 'So với tháng trước',
            });
            console.log(feature);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('homeWrapper')}>
            <FeaturedInfo data={''} />
            <Chart data={revenueYearly} title="Phân tích doanh thu" grid dataKey="Doanh thu" />
            <div className={cx('homeWidgets')}>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}
