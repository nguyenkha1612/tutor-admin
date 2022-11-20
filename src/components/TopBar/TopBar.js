import React from 'react';
import classNames from 'classnames/bind';
import { NotificationsNone as NotificationsNoneIcon, Language, Settings } from '@mui/icons-material';

import styles from './TopBar.module.scss';

const cx = classNames.bind(styles);

function TopBar() {
    return (
        <div className={cx('topbar')}>
            <div className={cx('topbarWrapper')}>
                <div className={cx('topLeft')}>
                    <span className={cx('logo')}>tutor admin</span>
                </div>
                <div className={cx('topRight')}>
                    <div className={cx('topbarIconContainer')}>
                        <NotificationsNoneIcon />
                        <span className={cx('topIconBadge')}>2</span>
                    </div>
                    <div className={cx('topbarIconContainer')}>
                        <Language />
                        <span className={cx('topIconBadge')}>2</span>
                    </div>
                    <div className={cx('topbarIconContainer')}>
                        <Settings />
                    </div>
                    <img
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                        alt="avatar"
                        className={cx('topAvatar')}
                    />
                </div>
            </div>
        </div>
    );
}

export default TopBar;
