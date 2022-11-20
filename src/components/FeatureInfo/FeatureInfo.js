import React from 'react';
import classNames from 'classnames/bind';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

import styles from './FeatureInfo.module.scss';

const cx = classNames.bind(styles);

function FeatureInfo() {
    return (
        <div className={cx('featured')}>
            <div className={cx('featuredItem')}>
                <span className={cx('featuredTitle')}>Revanue</span>
                <div className={cx('featuredMoneyContainer')}>
                    <span className={cx('featuredMoney')}>$2,415</span>
                    <span className={cx('featuredMoneyRate')}>
                        -11.4 <ArrowDownward className={cx('featuredIcon', 'negative')} />
                    </span>
                </div>
                <span className={cx('featuredSub')}>Compared to last month</span>
            </div>
            <div className={cx('featuredItem')}>
                <span className={cx('featuredTitle')}>Sales</span>
                <div className={cx('featuredMoneyContainer')}>
                    <span className={cx('featuredMoney')}>$4,415</span>
                    <span className={cx('featuredMoneyRate')}>
                        -1.4 <ArrowDownward className={cx('featuredIcon', 'negative')} />
                    </span>
                </div>
                <span className={cx('featuredSub')}>Compared to last month</span>
            </div>
            <div className={cx('featuredItem')}>
                <span className={cx('featuredTitle')}>Cost</span>
                <div className={cx('featuredMoneyContainer')}>
                    <span className={cx('featuredMoney')}>$2,225</span>
                    <span className={cx('featuredMoneyRate')}>
                        +2.4 <ArrowUpward className={cx('featuredIcon')} />
                    </span>
                </div>
                <span className={cx('featuredSub')}>Compared to last month</span>
            </div>
        </div>
    );
}

export default FeatureInfo;
