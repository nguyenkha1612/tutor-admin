import { Logout, NotificationsNone as NotificationsNoneIcon } from '@mui/icons-material';
import classNames from 'classnames/bind';
import { memo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useOnClickOutside } from '~/components/Hooks/useOnClickOutside';
import { logout } from '~/redux/auth/actions';

import DefaultImage from '~/assets/images/default-user.png';
import Menu from '~/components/Popper/Menu';
import Notification from '~/components/Popper/Notification';
import styles from './TopBar.module.scss';

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
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    const MENU_ITEMS = [
        // { icon: <></>, title: 'Feedback and help', to: '/feedback' },
        { icon: <Logout />, title: 'Đăng xuất', onClick: handleLogout },
    ];

    const handleMenuChange = (menuItem) => {
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
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        {auth.user ? (
                            <Link to={'/user/' + auth.user.id}>
                                <div className={cx('user')}>
                                    <span className={cx('user-name')}>{auth.user.name} </span>
                                    <img src={auth.user.urlAvt} alt="avatar" className={cx('topAvatar')} />
                                </div>
                            </Link>
                        ) : (
                            <Link to={'/login'}>
                                <img src={DefaultImage} alt="avatar" className={cx('topAvatar')} />
                            </Link>
                        )}
                        {/* <div className={cx('topbarIconContainer')}>
                        <Settings />
                    </div> */}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default memo(TopBar);
