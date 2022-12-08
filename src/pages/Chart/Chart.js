import className from 'classnames/bind';
import { useEffect } from 'react';
import { memo, useRef, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';

import ChartComponent from '~/components/Chart';
import { userData } from '~/dummyData';
import * as services from '~/services/services';
import styles from './Chart.module.scss';

const cx = className.bind(styles);

const newUserData = [
    {
        name: 'Jan',
        number: 110,
    },
    {
        name: 'Feb',
        number: 120,
    },
    {
        name: 'Mar',
        number: 140,
    },
    {
        name: 'Apr',
        number: 160,
    },
    {
        name: 'May',
        number: 60,
    },
    {
        name: 'Jun',
        number: 80,
    },
    {
        name: 'Jul',
        number: 50,
    },
    {
        name: 'Agu',
        number: 100,
    },
    {
        name: 'Sep',
        number: 150,
    },
    {
        name: 'Oct',
        number: 200,
    },
    {
        name: 'Nov',
        number: 220,
    },
    {
        name: 'Dec',
        number: 165,
    },
];

const newTransactionData = [
    {
        name: 'Jan',
        number: 520,
    },
    {
        name: 'Feb',
        number: 348,
    },
    {
        name: 'Mar',
        number: 775,
    },
    {
        name: 'Apr',
        number: 652,
    },
    {
        name: 'May',
        number: 490,
    },
    {
        name: 'Jun',
        number: 800,
    },
    {
        name: 'Jul',
        number: 753,
    },
    {
        name: 'Agu',
        number: 986,
    },
    {
        name: 'Sep',
        number: 1201,
    },
    {
        name: 'Oct',
        number: 1042,
    },
    {
        name: 'Nov',
        number: 862,
    },
    {
        name: 'Dec',
        number: 654,
    },
];

const options = [
    { label: new Date().getFullYear(), value: new Date().getFullYear() },
    { label: new Date().getFullYear() - 1, value: new Date().getFullYear() - 1 },
    { label: new Date().getFullYear() - 2, value: new Date().getFullYear() - 2 },
];

export default memo(function Chart() {
    const currentYear = useRef(options[0].value);
    const [revenueYearly, setRevenueYearly] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchApi = async () => {
        setLoading(true);
        let currencyRate = Number(process.env.REACT_APP_CURRENCY_RATE);
        const revenueRes = await services.getRevenueYearly(currentYear.current);
        let revenue = [];

        await revenueRes.data.forEach((data) => {
            revenue.push({
                name: 'Tháng ' + data.month,
                'Doanh thu': Number(data.amount) * currencyRate,
            });
        });

        setRevenueYearly(revenue);
        console.log(revenueYearly);

        const usersRes = await services.getUserList();
        let userList = usersRes.data;

        setLoading(false);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const handleChangeYear = (e) => {
        currentYear.current = e.target.value;
        fetchApi();
    };

    return (
        <div className={cx('chartWrapper')}>
            <div className={cx('chart')}>
                <select value={currentYear.current} onChange={handleChangeYear} className={cx('select-year')}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
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
                    <div className={cx('chart')}>
                        <ChartComponent
                            data={revenueYearly}
                            title={'Biểu đồ doanh thu năm ' + currentYear.current}
                            grid
                            dataKey="Doanh thu"
                        />
                    </div>
                    <div className={cx('chart')}>
                        <ChartComponent
                            data={newUserData}
                            title={'Biểu đồ người dùng mới năm ' + currentYear.current}
                            grid
                            dataKey="number"
                        />
                    </div>
                    <div className={cx('chart')}>
                        <ChartComponent
                            data={newTransactionData}
                            title={'Biểu đồ số lượt giao dịch năm ' + currentYear.current}
                            grid
                            dataKey="number"
                        />
                    </div>
                </div>
            </LoadingOverlay>
        </div>
    );
});
