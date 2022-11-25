import React from 'react';
import classNames from 'classnames/bind';
import { Visibility } from '@mui/icons-material';

import styles from './WidgetSm.module.scss';

const cx = classNames.bind(styles);

const fakeData = [
    {
        img: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
        userName: 'Anna Keller',
        tittle: 'Software Engineer',
    },
    {
        img: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
        userName: 'Anna Keller',
        tittle: 'Software Engineer',
    },
    {
        img: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
        userName: 'Anna Keller',
        tittle: 'Software Engineer',
    },
    {
        img: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
        userName: 'Anna Keller',
        tittle: 'Software Engineer',
    },
    {
        img: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
        userName: 'Anna Keller',
        tittle: 'Software Engineer',
    },
];

function WidgetSm() {
    return (
        <div className={cx('widgetSm')}>
            <span className={cx('widgetSmTitle')}>New Join Members</span>
            <ul className={cx('widgetSmList')}>
                {fakeData.map((data, index) => {
                    return (
                        <li key={index} className={cx('widgetSmListItem')}>
                            <div className={cx('widgetSmListItem__left')}>
                                <img src={data.img} alt="" className={cx('widgetSmImg')} />
                                <div className={cx('widgetSmUser')}>
                                    <span className={cx('widgetSmUsername')}>{data.userName}</span>
                                    <span className={cx('widgetSmUserTitle')}>{data.tittle}</span>
                                </div>
                            </div>
                            <div className={cx('widgetSmListItem__right')}>
                                <button className={cx('widgetSmButton')}>
                                    <Visibility className={cx('widgetSmIcon')} />
                                    Display
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default WidgetSm;
