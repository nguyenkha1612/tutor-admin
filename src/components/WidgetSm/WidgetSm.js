import React from 'react';
import classNames from 'classnames/bind';
import { Visibility } from '@mui/icons-material';

import styles from './WidgetSm.module.scss';

const cx = classNames.bind(styles);

function WidgetSm() {
    return (
        <div className={cx('widgetSm')}>
            <span className={cx('widgetSmTitle')}>New Join Members</span>
            <ul className={cx('widgetSmList')}>
                <li className={cx('widgetSmListItem')}>
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className={cx('widgetSmImg')}
                    />
                    <div className={cx('widgetSmUser')}>
                        <span className={cx('widgetSmUsername')}>Anna Keller</span>
                        <span className={cx('widgetSmUserTitle')}>Software Engineer</span>
                    </div>
                    <button className={cx('widgetSmButton')}>
                        <Visibility className={cx('widgetSmIcon')} />
                        Display
                    </button>
                </li>
                <li className={cx('widgetSmListItem')}>
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className={cx('widgetSmImg')}
                    />
                    <div className={cx('widgetSmUser')}>
                        <span className={cx('widgetSmUsername')}>Anna Keller</span>
                        <span className={cx('widgetSmUserTitle')}>Software Engineer</span>
                    </div>
                    <button className={cx('widgetSmButton')}>
                        <Visibility className={cx('widgetSmIcon')} />
                        Display
                    </button>
                </li>
                <li className={cx('widgetSmListItem')}>
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className={cx('widgetSmImg')}
                    />
                    <div className={cx('widgetSmUser')}>
                        <span className={cx('widgetSmUsername')}>Anna Keller</span>
                        <span className={cx('widgetSmUserTitle')}>Software Engineer</span>
                    </div>
                    <button className={cx('widgetSmButton')}>
                        <Visibility className={cx('widgetSmIcon')} />
                        Display
                    </button>
                </li>
                <li className={cx('widgetSmListItem')}>
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className={cx('widgetSmImg')}
                    />
                    <div className={cx('widgetSmUser')}>
                        <span className={cx('widgetSmUsername')}>Anna Keller</span>
                        <span className={cx('widgetSmUserTitle')}>Software Engineer</span>
                    </div>
                    <button className={cx('widgetSmButton')}>
                        <Visibility className={cx('widgetSmIcon')} />
                        Display
                    </button>
                </li>
                <li className={cx('widgetSmListItem')}>
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className={cx('widgetSmImg')}
                    />
                    <div className={cx('widgetSmUser')}>
                        <span className={cx('widgetSmUsername')}>Anna Keller</span>
                        <span className={cx('widgetSmUserTitle')}>Software Engineer</span>
                    </div>
                    <button className={cx('widgetSmButton')}>
                        <Visibility className={cx('widgetSmIcon')} />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default WidgetSm;
