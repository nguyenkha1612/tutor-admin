import className from 'classnames/bind';
import { useEffect } from 'react';

import Chart from '~/components/Chart';
import FeaturedInfo from '~/components/FeatureInfo';
import WidgetSm from '~/components/WidgetSm';
import WidgetLg from '~/components/WidgetLg';
import { userData } from '~/dummyData';

import * as services from '~/services/services';

import styles from './Home.module.scss';

const cx = className.bind(styles);

export default function Home() {
    useEffect(() => {
        const fetchApi = async () => {
            // const result = await services.loginService('nguyenhuukha1612@gmail.com', '123');
            localStorage.setItem(
                'token',
                'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzA3NTExNDksInVzZXIiOnsicGFzc3dvcmQiOiIkMmEkMTAkcEtlRG9EVWxnSkF2b0psQm9jZ0RUdS5UajRCenVxbURzMEZQSUpnRHY3RVlEd01McUFpOWkiLCJ1c2VySWQiOjQxLCJhdXRob3JpdGllcyI6WyJSRUFEIiwiU1RVREVOVCJdLCJ1c2VybmFtZSI6Im5ndXllbmh1dWtoYTE2MTJAZ21haWwuY29tIn19._W-7B38C7el4zbFisUtjlmlJtu3OLF98bZ1MjMK2u-M',
            );
            const result = await services.getUserList();
            console.log(result);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('homeWrapper')}>
            <FeaturedInfo />
            <Chart data={userData} title="Phân tích doanh thu" grid dataKey="Doanh thu" />
            <div className={cx('homeWidgets')}>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}
