import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';

import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function SideBar() {
    const [dashboard, setDashboard] = useState(config.dashboard);

    const handleLink = (dataTitle, itemTitle) => {
        let newDashboard = [...dashboard];
        newDashboard.forEach((data) => {
            data.list.forEach((item) => {
                data.title === dataTitle && item.title === itemTitle ? (item.active = true) : (item.active = false);
            });
        });
        setDashboard(newDashboard);
    };

    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebarWrapper')}>
                {dashboard.map((data, index) => {
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
