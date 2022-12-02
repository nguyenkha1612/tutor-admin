import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Sidebar from '~/components/SideBar';
import TopBar from '~/components/TopBar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <TopBar />
            <div className={cx('container')}>
                <Sidebar />
                {children}
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
