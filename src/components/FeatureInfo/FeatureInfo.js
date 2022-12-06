import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

import styles from './FeatureInfo.module.scss';
import { handleQuantity } from '~/utils/commonFunc';

const cx = classNames.bind(styles);

function FeatureInfo({ data = [] }) {
    return (
        <div className={cx('featured')}>
            {data.map((data, index) => {
                return (
                    <div key={index} className={cx('featuredItem')}>
                        <span className={cx('featuredTitle')}>{data.title}</span>
                        <div className={cx('featuredMoneyContainer')}>
                            <span className={cx('featuredMoney')}>
                                {handleQuantity(data.currentQuantity, '.')} {data.unit}
                            </span>
                            <span className={cx('featuredMoneyRate')}>
                                {data.quantityRate > 0 ? '+' + data.quantityRate : data.quantityRate}
                                {data.quantityRateUnit}
                                {data.quantityRate > 0 ? (
                                    <ArrowUpward className={cx('featuredIcon')} />
                                ) : (
                                    <ArrowDownward className={cx('featuredIcon', 'negative')} />
                                )}
                            </span>
                        </div>
                        <span className={cx('featuredSub')}>{data.featuredSub}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default memo(FeatureInfo);
