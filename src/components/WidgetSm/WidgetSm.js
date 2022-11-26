import React from 'react';
import classNames from 'classnames/bind';
import { Visibility } from '@mui/icons-material';

import styles from './WidgetSm.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const dummyData = [
    {
        id: 1,
        userName: 'JohnSm',
        name: 'John Smith',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
        id: 2,
        userName: 'Anna Keller',
        name: 'Anna Keller',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaACAqM6mw3HPUJ6owRdYM_aFJKJH_7CRV3wgDvYW7on5Ah7JbszIvgFLaqgozqG63ew&usqp=CAU',
    },
    {
        id: 3,
        userName: 'Jon Snow',
        name: 'Jon Snow',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBqdpWh_B0qQxQA-m9KmHPYONqhpiP8aQvKCIVegRYygEms58Xa-UjcnD88TsYpbNjLs&usqp=CAU',
    },
    {
        id: 4,
        userName: 'Taylor Smurf',
        name: 'Taylor Xmis',
        avatar: 'https://img.favpng.com/9/14/17/computer-icons-social-media-png-favpng-QsaBd8gnpzK2HRZn6X15nbNX2_t.jpg',
    },
    {
        id: 5,
        userName: 'Arianmu Grandu',
        name: 'Arianna Grandu',
        avatar: 'https://www.w3schools.com/w3images/avatar6.png',
    },
];

function WidgetSm() {
    return (
        <div className={cx('widgetSm')}>
            <span className={cx('widgetSmTitle')}>Thành viên mới gia nhập</span>
            <ul className={cx('widgetSmList')}>
                {dummyData.map((user, index) => {
                    return (
                        <Link to={'/user/' + user.id}>
                            <li key={index} className={cx('widgetSmListItem')}>
                                <div className={cx('widgetSmListItem__left')}>
                                    <img src={user.avatar} alt="" className={cx('widgetSmImg')} />
                                    <div className={cx('widgetSmUser')}>
                                        <span className={cx('widgetSmUsername')}>{user.userName}</span>
                                        <span className={cx('widgetSmUserTitle')}>{user.name}</span>
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

export default WidgetSm;
