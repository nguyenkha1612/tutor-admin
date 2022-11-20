import className from 'classnames/bind';

import Chart from '~/components/Chart';
import FeaturedInfo from '~/components/FeatureInfo';
import WidgetSm from '~/components/WidgetSm';
import WidgetLg from '~/components/WidgetLg';
import { userData } from '~/dummyData';

import styles from './Home.module.scss';

const cx = className.bind(styles);

export default function Home() {
    return (
        <div className={cx('test')}>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className={cx('homeWidgets')}>
                <WidgetSm />
                <WidgetLg />
            </div>
            Hi
        </div>
    );
}
