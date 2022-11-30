import React from 'react';
import classNames from 'classnames/bind';

import styles from './WidgetLg.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const dummyData = [
    {
        user: {
            id: 1,
            userName: 'Arianmu Grandu',
            name: 'Arianmu Grandu',
            avatar: 'https://www.w3schools.com/w3images/avatar6.png',
        },
        date: '2022-20-11',
        total: '50.000',
        currency: 'VNĐ',
        status: 'Approved',
    },
    {
        user: {
            id: 2,
            userName: 'Arianmu Grandu',
            name: 'Arianmu Grandu',
            avatar: 'https://www.w3schools.com/w3images/avatar6.png',
        },
        date: '2022-20-11',
        total: '60.000',
        currency: 'VNĐ',
        status: 'Declined',
    },
    {
        user: {
            id: 3,
            userName: 'Arianmu Grandu',
            name: 'Arianmu Grandu',
            avatar: 'https://www.w3schools.com/w3images/avatar6.png',
        },
        date: '2022-20-11',
        total: '24.000',
        currency: 'VNĐ',
        status: 'Pending',
    },
    {
        user: {
            id: 4,
            userName: 'Arianmu Grandu',
            name: 'Arianmu Grandu',
            avatar: 'https://www.w3schools.com/w3images/avatar6.png',
        },
        date: '2022-20-11',
        total: '70.000',
        currency: 'VNĐ',
        status: 'Approved',
    },
];

function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={cx('widgetLgButton', type)}>{type}</button>;
    };
    return (
        <div className={cx('widgetLg')}>
            <h3 className={cx('widgetLgTitle')}>Giao dịch gần nhất</h3>
            <table className={cx('widgetLgTable')}>
                <tbody>
                    <tr className={cx('widgetLgTr')}>
                        <th className={cx('widgetLgTh')}>Khách hàng</th>
                        <th className={cx('widgetLgTh')}>Ngày giao dịch</th>
                        <th className={cx('widgetLgTh')}>Số tiền</th>
                        <th className={cx('widgetLgTh')}>Trạng thái</th>
                    </tr>
                    {dummyData.map((transaction, index) => {
                        return (
                            <tr key={index} className={cx('widgetLgTr')}>
                                <td className={cx('widgetLgUser')}>
                                    <Link to={'/user/' + transaction.user.id}>
                                        <img src={transaction.user.avatar} alt="" className={cx('widgetLgImg')} />
                                        <span className={cx('widgetLgName')}>{transaction.user.userName}</span>
                                    </Link>
                                </td>
                                <td className={cx('widgetLgDate')}>{transaction.date}</td>
                                <td className={cx('widgetLgAmount')}>
                                    {transaction.total} {transaction.currency}
                                </td>
                                <td className={cx('widgetLgStatus')}>
                                    <Button type={transaction.status} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default WidgetLg;
