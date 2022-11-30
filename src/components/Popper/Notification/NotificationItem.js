import PropTypes from 'prop-types';
import className from 'classnames/bind';

import styles from './Notification.module.scss';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

function MenuItem({ data }) {
    const classes = cx('notification-item', {
        separate: data.separate,
    });

    return (
        <div className={cx('wrapper')}>
            <Link to={data.to} className={classes}>
                <div className={cx('notification-item__left')}>
                    <img src={data.image} alt="avatar" className={cx('notification-item__image')} />
                </div>
                <div className={cx('notification-item__right')}>
                    <span>{data.message}</span>
                </div>
            </Link>
        </div>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MenuItem;
