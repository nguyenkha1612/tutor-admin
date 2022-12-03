import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import { NotificationsNone as NotificationsNoneIcon, Language, Settings } from '@mui/icons-material';
import { Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useOnClickOutside } from '~/components/Hooks/useOnClickOutside';
import { logout } from '~/redux/auth/actions';
import config from '~/config';

import Menu from '~/components/Popper/Menu';
import Notification from '~/components/Popper/Notification';
import styles from './TopBar.module.scss';
import DefaultImage from '~/assets/images/default-user.png';

const cx = classNames.bind(styles);

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
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (localStorage.isLogin) setIsLogin(true);
    }, []);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    const MENU_ITEMS = [
        // { icon: <></>, title: 'Feedback and help', to: '/feedback' },
        { icon: <Logout />, title: 'Đăng xuất', onClick: handleLogout },
    ];

    const handleMenuCHange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
                console.log(menuItem);
        }
    };
    const auth = useSelector((state) => state.auth);
    const refOverClickOutSide = useRef();
    const [isShow, setIsShow] = useState(false);
    useOnClickOutside(refOverClickOutSide, () => setIsShow(!isShow));
    const toggleDropdown = () => {
        // setIsShow(!isShow);
        // console.log(isShow);
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

                    <Menu items={MENU_ITEMS} onChange={handleMenuCHange}>
                        {auth.user ? (
                            <div className={cx('user')}>
                                <span className={cx('user-name')}>{auth.user.name} </span>
                                <div className={cx('avatar')}>
                                    <img src={DefaultImage} alt="" />
                                </div>
                            </div>
                        ) : null}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
