import className from 'classnames/bind';
import { useRef, useState } from 'react';

import ChartComponent from '~/components/Chart';
import { userData } from '~/dummyData';

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
    { label: 2022, value: 2022 },
    { label: 2021, value: 2021 },
    { label: 2020, value: 2020 },
];

export default function Chart() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const handleChangeYear = (e) => {
        setCurrentYear(e.target.value);
    };

    return (
        <div className={cx('chartWrapper')}>
            <div className={cx('chart')}>
                <select onChange={handleChangeYear} className={cx('select-year')}>
                    {options.map((option) => (
                        <option key={option.label} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className={cx('chart')}>
                <ChartComponent
                    data={userData}
                    title={'Biểu đồ doanh thu năm ' + currentYear}
                    grid
                    dataKey="Doanh thu"
                />
            </div>
            <div className={cx('chart')}>
                <ChartComponent
                    data={newUserData}
                    title={'Biểu đồ người dùng mới năm ' + currentYear}
                    grid
                    dataKey="number"
                />
            </div>
            <div className={cx('chart')}>
                <ChartComponent
                    data={newTransactionData}
                    title={'Biểu đồ số lượt giao dịch năm ' + currentYear}
                    grid
                    dataKey="number"
                />
            </div>
        </div>
    );
}
