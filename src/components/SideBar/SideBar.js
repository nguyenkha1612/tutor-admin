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

const dummyData = [
    {
        title: 'Dashboard',
        list: [
            {
                link: '/',
                active: true,
                title: 'Home',
                icon: <LineStyle className={cx('sidebarIcon')} />,
            },
            {
                link: '/analytics',
                active: false,
                title: 'Analytics',
                icon: <Timeline className={cx('sidebarIcon')} />,
            },
            {
                link: '/sales',
                active: false,
                title: 'Sales',
                icon: <TrendingUp className={cx('sidebarIcon')} />,
            },
        ],
    },
    {
        title: 'Quick Menu',
        list: [
            {
                link: '/users',
                active: false,
                title: 'Users',
                icon: <PermIdentity className={cx('sidebarIcon')} />,
            },
            {
                link: '/products',
                active: false,
                title: 'Products',
                icon: <Storefront className={cx('sidebarIcon')} />,
            },
            {
                link: '/transactions',
                active: false,
                title: 'Transactions',
                icon: <AttachMoney className={cx('sidebarIcon')} />,
            },
            {
                link: '/reports',
                active: false,
                title: 'Reports',
                icon: <BarChart className={cx('sidebarIcon')} />,
            },
        ],
    },
    {
        title: 'Notifications',
        list: [
            {
                link: '/mail',
                active: false,
                title: 'Mail',
                icon: <MailOutline className={cx('sidebarIcon')} />,
            },
            {
                link: '/feedback',
                active: false,
                title: 'Feedback',
                icon: <DynamicFeed className={cx('sidebarIcon')} />,
            },
            {
                link: '/messages',
                active: false,
                title: 'Messages',
                icon: <ChatBubbleOutline className={cx('sidebarIcon')} />,
            },
        ],
    },
    {
        title: 'Staff',
        list: [
            {
                link: '/manage',
                active: false,
                title: 'Manage',
                icon: <WorkOutline className={cx('sidebarIcon')} />,
            },
            {
                link: '/analytics',
                active: false,
                title: 'Analytics',
                icon: <Timeline className={cx('sidebarIcon')} />,
            },
            {
                link: '/reports',
                active: false,
                title: 'Reports',
                icon: <Report className={cx('sidebarIcon')} />,
            },
        ],
    },
];

function SideBar() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebarWrapper')}>
                {dummyData.map((data, index) => {
                    return (
                        <div key={index} className={cx('sidebarMenu')}>
                            <h3 className={cx('sidebarTitle')}>{data.title}</h3>
                            <ul className={cx('sidebarList')}>
                                {data.list.map((item, index) => {
                                    return (
                                        <Link key={index} to={item.link} className={cx('link')}>
                                            {item.active ? (
                                                <li className={cx('sidebarListItem', 'active')}>
                                                    {item.icon}
                                                    {item.title}
                                                </li>
                                            ) : (
                                                <li className={cx('sidebarListItem')}>
                                                    {item.icon}
                                                    {item.title}
                                                </li>
                                            )}
                                        </Link>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SideBar;
