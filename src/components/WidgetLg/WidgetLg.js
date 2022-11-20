import React from 'react';
import classNames from 'classnames/bind';

import styles from './WidgetLg.module.scss';

const cx = classNames.bind(styles);

function WidgetLg() {
    const Button = ({ type }) => {
        let cln = 'widgetLgButton ' + type;
        return <button className={cln}>{type}</button>;
    };
    return (
        <div className={cx('widgetLg')}>
            <h3 className={cx('widgetLgTitle')}>Latest transactions</h3>
            <table className={cx('widgetLgTable')}>
                <tr className={cx('widgetLgTr')}>
                    <th className={cx('widgetLgTh')}>Customer</th>
                    <th className={cx('widgetLgTh')}>Date</th>
                    <th className={cx('widgetLgTh')}>Amount</th>
                    <th className={cx('widgetLgTh')}>Status</th>
                </tr>
                <tr className={cx('widgetLgTr')}>
                    <td className={cx('widgetLgUser')}>
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className={cx('widgetLgImg')}
                        />
                        <span className={cx('widgetLgName')}>Susan Carol</span>
                    </td>
                    <td className={cx('widgetLgDate')}>2 Jun 2021</td>
                    <td className={cx('widgetLgAmount')}>$122.00</td>
                    <td className={cx('widgetLgStatus')}>
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className={cx('widgetLgTr')}>
                    <td className={cx('widgetLgUser')}>
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className={cx('widgetLgImg')}
                        />
                        <span className={cx('widgetLgName')}>Susan Carol</span>
                    </td>
                    <td className={cx('widgetLgDate')}>2 Jun 2021</td>
                    <td className={cx('widgetLgAmount')}>$122.00</td>
                    <td className={cx('widgetLgStatus')}>
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className={cx('widgetLgTr')}>
                    <td className={cx('widgetLgUser')}>
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className={cx('widgetLgImg')}
                        />
                        <span className={cx('widgetLgName')}>Susan Carol</span>
                    </td>
                    <td className={cx('widgetLgDate')}>2 Jun 2021</td>
                    <td className={cx('widgetLgAmount')}>$122.00</td>
                    <td className={cx('widgetLgStatus')}>
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className={cx('widgetLgTr')}>
                    <td className={cx('widgetLgUser')}>
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className={cx('widgetLgImg')}
                        />
                        <span className={cx('widgetLgName')}>Susan Carol</span>
                    </td>
                    <td className={cx('widgetLgDate')}>2 Jun 2021</td>
                    <td className={cx('widgetLgAmount')}>$122.00</td>
                    <td className={cx('widgetLgStatus')}>
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default WidgetLg;
