import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { memo } from 'react';
import { handleDate, handleQuantity, upperCaseFirstLetter } from '~/utils/commonFunc';
import styles from './WidgetLg.module.scss';

const cx = classNames.bind(styles);

function WidgetLg({ data, title, col, type }) {
    const Button = ({ type }) => {
        type = upperCaseFirstLetter(type);
        return <button className={cx('widgetLgButton', type)}>{type}</button>;
    };

    return (
        <div className={cx('widgetLg')}>
            <h3 className={cx('widgetLgTitle')}>{title}</h3>
            {type === 'course' ? (
                <table className={cx('widgetLgTable')}>
                    <tbody>
                        <tr className={cx('widgetLgTr')}>
                            {col.map((item, index) => {
                                return (
                                    <th key={index} className={cx('widgetLgTh')}>
                                        {item}
                                    </th>
                                );
                            })}
                        </tr>
                        {data.map((item) => {
                            return (
                                <tr key={item.id} className={cx('widgetLgTr')}>
                                    <td className={cx('widgetLgDate')}>{item.title}</td>
                                    <td className={cx('widgetLgDate')}>{handleQuantity(item.tuition, '.', ' VNĐ')}</td>
                                    <td className={cx('widgetLgAmount')}>{item.status}</td>
                                    <td className={cx('widgetLgStatus')}>
                                        <Link
                                            to={'/course/' + item.id}
                                            className={cx('widgetLgUser')}
                                            state={{ data: item }}
                                        >
                                            <Button type={'Detail'} />
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <table className={cx('widgetLgTable')}>
                    <tbody>
                        <tr className={cx('widgetLgTr')}>
                            {col.map((item, index) => {
                                return (
                                    <th key={index} className={cx('widgetLgTh')}>
                                        {item}
                                    </th>
                                );
                            })}
                        </tr>
                        {data.map((item) => {
                            return (
                                <tr key={item.id} className={cx('widgetLgTr')}>
                                    <td>
                                        <Link
                                            to={'/transaction/' + item.id}
                                            className={cx('widgetLgUser')}
                                            state={{ data: item }}
                                        >
                                            <img src={item.user.urlAvt} alt="avatar" className={cx('widgetLgImg')} />
                                            <span className={cx('widgetLgName')}>{item.user.name}</span>
                                        </Link>
                                    </td>
                                    <td className={cx('widgetLgDate')}>{handleDate(item.createdAt)}</td>
                                    <td className={cx('widgetLgAmount')}>
                                        {item.amount} {item.currencyCode}
                                    </td>
                                    <td className={cx('widgetLgStatus')}>
                                        <Link
                                            to={'/transaction/' + item.id}
                                            className={cx('widgetLgUser')}
                                            state={{ data: item }}
                                        >
                                            <Button type={item.status} />
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default memo(WidgetLg);
