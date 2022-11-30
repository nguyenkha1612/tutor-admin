import React from 'react';
import classNames from 'classnames/bind';
import { NotificationsNone as NotificationsNoneIcon, Language, Settings } from '@mui/icons-material';
import { Logout } from '@mui/icons-material';

import Menu from '~/components/Popper/Menu';
import Notification from '~/components/Popper/Notification';
import styles from './TopBar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    // { icon: <></>, title: 'Feedback and help', to: '/feedback' },
    { icon: <Logout />, title: 'Đăng xuất' },
];

const NOTIFICATION_ITEMS = [
    {
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        message: 'Người dùng arianmugradidi đã thêm một bài viết mới',
        to: '/',
    },
    {
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        message: 'Xem ngay doanh thu của tháng 11/2022',
        to: '/chart',
    },
];

function TopBar() {
    const handleMenuCHange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
                console.log(menuItem);
        }
    };

    return (
        <div className={cx('topbar')}>
            <div className={cx('topbarWrapper')}>
                <div className={cx('topLeft')}>
                    <Link to={'/'}>
                        <span className={cx('logo')}>TUTOR ADMIN</span>
                    </Link>
                </div>
                <div className={cx('topRight')}>
                    <Notification items={NOTIFICATION_ITEMS}>
                        <div className={cx('topbarIconContainer')}>
                            <NotificationsNoneIcon />
                            <span className={cx('topIconBadge')}>2</span>
                        </div>
                    </Notification>
                    <div className={cx('topbarIconContainer')}>
                        <Settings />
                    </div>
                    <Menu items={MENU_ITEMS} onChange={handleMenuCHange}>
                        <img
                            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                            alt="avatar"
                            className={cx('topAvatar')}
                        />
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
