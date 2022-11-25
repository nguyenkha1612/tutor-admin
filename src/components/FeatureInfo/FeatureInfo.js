import React from 'react';
import classNames from 'classnames/bind';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

import styles from './FeatureInfo.module.scss';

const cx = classNames.bind(styles);

const dummyData = [
    {
        title: 'Doanh thu',
        currentQuantity: '135.000.000',
        unit: 'VNĐ',
        quantityRate: '-11.4',
        increase: false,
        featuredSub: 'So với tháng trước',
    },
    {
        title: 'Lớp học mới',
        currentQuantity: '532',
        unit: 'lớp',
        quantityRate: '-2',
        increase: false,
        featuredSub: 'So với tháng trước',
    },
    {
        title: 'Số lượt giao dịch',
        currentQuantity: '2430',
        unit: 'giao dịch',
        quantityRate: '+5.2',
        increase: true,
        featuredSub: 'So với tháng trước',
    },
];

function FeatureInfo() {
    return (
        <div className={cx('featured')}>
            {dummyData.map((data, index) => {
                return (
                    <div key={index} className={cx('featuredItem')}>
                        <span className={cx('featuredTitle')}>{data.title}</span>
                        <div className={cx('featuredMoneyContainer')}>
                            <span className={cx('featuredMoney')}>
                                {data.currentQuantity} {data.unit}
                            </span>
                            <span className={cx('featuredMoneyRate')}>
                                {data.quantityRate}
                                {'% '}
                                {data.increase ? (
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

export default FeatureInfo;
