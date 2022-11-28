import React from 'react';
import classNames from 'classnames/bind';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './Chart.module.scss';

const cx = classNames.bind(styles);

function Chart({ title, data, dataKey, grid }) {
    return (
        <div className={cx('chart')}>
            <h3 className={cx('chartTitle')}>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;