import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { Visibility } from '@mui/icons-material';

import styles from './WidgetSm.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function WidgetSm({ data }) {
    return (
        <div className={cx('widgetSm')}>
            <span className={cx('widgetSmTitle')}>Thành viên mới gia nhập</span>
            <ul className={cx('widgetSmList')}>
                {data.map((user) => {
                    return (
                        <Link key={user.id} to={'/user/' + user.id}>
                            <li className={cx('widgetSmListItem')}>
                                <div className={cx('widgetSmListItem__left')}>
                                    <img src={user.urlAvt} alt="avatar" className={cx('widgetSmImg')} />
                                    <div className={cx('widgetSmUser')}>
                                        <span className={cx('widgetSmUsername')}>{user.name}</span>
                                        <span className={cx('widgetSmUserTitle')}>{user.email}</span>
                                    </div>
                                </div>
                                <div className={cx('widgetSmListItem__right')}>
                                    <button className={cx('widgetSmButton')}>
                                        <Visibility className={cx('widgetSmIcon')} />
                                        Display
                                    </button>
                                </div>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}

export default memo(WidgetSm);
