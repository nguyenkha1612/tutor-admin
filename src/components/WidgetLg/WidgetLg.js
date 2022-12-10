import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { memo } from 'react';
import { handleDate, upperCaseFirstLetter } from '~/utils/commonFunc';
import styles from './WidgetLg.module.scss';

const cx = classNames.bind(styles);

function WidgetLg({ data }) {
    const Button = ({ type }) => {
        type = upperCaseFirstLetter(type);
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
                    {data.map((transaction) => {
                        return (
                            <tr key={transaction.id} className={cx('widgetLgTr')}>
                                <td>
                                    <Link to={'/user/' + transaction.user.id} className={cx('widgetLgUser')}>
                                        <img src={transaction.user.urlAvt} alt="avatar" className={cx('widgetLgImg')} />
                                        <span className={cx('widgetLgName')}>{transaction.user.name}</span>
                                    </Link>
                                </td>
                                <td className={cx('widgetLgDate')}>{handleDate(transaction.createdAt)}</td>
                                <td className={cx('widgetLgAmount')}>
                                    {transaction.amount} {transaction.currencyCode}
                                </td>
                                <td className={cx('widgetLgStatus')}>
                                    <Link to={'/transaction/' + transaction.id} className={cx('widgetLgUser')}>
                                        <Button type={transaction.status} />
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default memo(WidgetLg);
