import {
    AttachMoney,
    ChatBubbleOutline,
    ContentPaste,
    DynamicFeed,
    Home,
    MailOutline,
    PermIdentity,
    Report,
    School,
    Timeline,
    WorkOutline,
} from '@mui/icons-material';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './SideBar.module.scss';
import * as services from '~/services/services';

const cx = classNames.bind(styles);

function SideBar() {
    const [transactionList, setTransactionList] = useState([]);
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await services.getTransactionList();
            const transactionList = res.data;
            for (let i = 0; i < transactionList.length; i++) {
                let userInfo = await services.getUserById(transactionList[i].userId);
                if (userInfo != null)
                    transactionList[i] = {
                        ...transactionList[i],
                        userInfo: userInfo.data,
                    };
            }
            setTransactionList(transactionList);

            const coursesResponse = await services.getCourseList();
            setCourseList(coursesResponse.data.data);
        };

        fetchApi();
    }, []);

    let [dummyData, setDummyData] = useState([
        {
            title: 'Dashboard',
            list: [
                {
                    link: '/',
                    active: true,
                    title: 'Trang chủ',
                    icon: <Home className={cx('sidebarIcon')} />,
                },
            ],
        },
        {
            title: 'Quick Menu',
            list: [
                {
                    link: '/chart',
                    active: false,
                    title: 'Biểu đồ',
                    icon: <Timeline className={cx('sidebarIcon')} />,
                },
                {
                    link: '/users',
                    active: false,
                    title: 'Tài khoản người dùng',
                    icon: <PermIdentity className={cx('sidebarIcon')} />,
                },
                {
                    link: '/courses',
                    active: false,
                    title: 'Khoá học',
                    icon: <School className={cx('sidebarIcon')} />,
                },
                {
                    link: '/transactions',
                    active: false,
                    title: 'Giao dịch',
                    icon: <AttachMoney className={cx('sidebarIcon')} />,
                },
                {
                    link: '/posts',
                    active: false,
                    title: 'Bài đăng',
                    icon: <ContentPaste className={cx('sidebarIcon')} />,
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
    ]);

    const handleLink = (dataTitle, itemTitle) => {
        let newDummyData = [...dummyData];
        newDummyData.forEach((data) => {
            data.list.forEach((item) => {
                data.title === dataTitle && item.title === itemTitle ? (item.active = true) : (item.active = false);
            });
        });
        setDummyData(newDummyData);
    };

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
                                        <Link
                                            key={index}
                                            to={item.link}
                                            className={cx('link')}
                                            onClick={() => handleLink(data.title, item.title)}
                                            state={{ transactionList: transactionList, courseList: courseList }}
                                        >
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
