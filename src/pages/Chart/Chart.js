import className from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';

import ChartComponent from '~/components/Chart';
import * as services from '~/services/services';
import styles from './Chart.module.scss';

const cx = className.bind(styles);

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
    const [newUserYearly, setNewUserYearly] = useState([]);
    const [transactionYearly, setTransactionYearly] = useState([]);
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

        const usersRes = await services.getUserList();
        let usersChartData = [];

        for (let month = 0; month < 12; month++) {
            let count = 0;
            usersRes.data.forEach((data) => {
                let createdAt = new Date(data.createdAt);
                if (createdAt.getFullYear() === currentYear.current && createdAt.getMonth() === month) count++;
            });
            usersChartData.push({
                name: 'Tháng ' + Number(month + 1),
                'Người dùng mới': count,
            });
        }
        setNewUserYearly(usersChartData);

        const transactionsRes = await services.getTransactionList();
        let transactionsChartData = [];
        for (let month = 0; month < 12; month++) {
            let count = 0;
            transactionsRes.data.forEach((data) => {
                let createdAt = new Date(data.createdAt);
                if (createdAt.getFullYear() === currentYear.current && createdAt.getMonth() === month) count++;
            });
            transactionsChartData.push({
                name: 'Tháng ' + Number(month + 1),
                'Giao dịch mới': count,
            });
        }
        setTransactionYearly(transactionsChartData);

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
                            data={newUserYearly}
                            title={'Biểu đồ người dùng mới năm ' + currentYear.current}
                            grid
                            dataKey="Người dùng mới"
                        />
                    </div>
                    <div className={cx('chart')}>
                        <ChartComponent
                            data={transactionYearly}
                            title={'Biểu đồ số lượt giao dịch năm ' + currentYear.current}
                            grid
                            dataKey="Giao dịch mới"
                        />
                    </div>
                </div>
            </LoadingOverlay>
        </div>
    );
});
