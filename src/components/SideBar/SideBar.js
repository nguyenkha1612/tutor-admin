import React from 'react';
import classNames from 'classnames/bind';
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebarWrapper')}>
                <div className={cx('sidebarMenu')}>
                    <h3 className={cx('sidebarTitle')}>Dashboard</h3>
                    <ul className={cx('sidebarList')}>
                        <Link to="/" className={cx('link')}>
                            <li className={cx('sidebarListItem', 'active')}>
                                <LineStyle className={cx('sidebarIcon')} />
                                Home
                            </li>
                        </Link>
                        <li className={cx('sidebarListItem')}>
                            <Timeline className={cx('sidebarIcon')} />
                            Analytics
                        </li>
                        <li className={cx('sidebarListItem')}>
                            <TrendingUp className={cx('sidebarIcon')} />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className={cx('sidebarMenu')}>
                    <h3 className={cx('sidebarTitle')}>Quick Menu</h3>
                    <ul className={cx('sidebarList')}>
                        <Link to="/users" className={cx('link')}>
                            <li className={cx('sidebarListItem')}>
                                <PermIdentity className={cx('sidebarIcon')} />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className={cx('link')}>
                            <li className={cx('sidebarListItem')}>
                                <Storefront className={cx('sidebarIcon')} />
                                Products
                            </li>
                        </Link>
                        <li className={cx('sidebarListItem')}>
                            <AttachMoney className={cx('sidebarIcon')} />
                            Transactions
                        </li>
                        <li className={cx('sidebarListItem')}>
                            <BarChart className={cx('sidebarIcon')} />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className={cx('sidebarMenu')}>
                    <h3 className={cx('sidebarTitle')}>Notifications</h3>
                    <ul className={cx('sidebarList')}>
                        <li className={cx('sidebarListItem')}>
                            <MailOutline className={cx('sidebarIcon')} />
                            Mail
                        </li>
                        <li className={cx('sidebarListItem')}>
                            <DynamicFeed className={cx('sidebarIcon')} />
                            Feedback
                        </li>
                        <li className={cx('sidebarListItem')}>
                            <ChatBubbleOutline className={cx('sidebarIcon')} />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className={cx('sidebarMenu')}>
                    <h3 className={cx('sidebarTitle')}>Staff</h3>
                    <ul className={cx('sidebarList')}>
                        <li className={cx('sidebarListItem')}>
                            <WorkOutline className={cx('sidebarIcon')} />
                            Manage
                        </li>
                        <li className={cx('sidebarListItem')}>
                            <Timeline className={cx('sidebarIcon')} />
                            Analytics
                        </li>
                        <li className={cx('sidebarListItem')}>
                            <Report className={cx('sidebarIcon')} />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
