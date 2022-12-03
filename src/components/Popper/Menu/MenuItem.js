import PropTypes from 'prop-types';
import className from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = className.bind(styles);

function MenuItem({ data }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <div className={cx('wrapper')}>
            <Button text leftIcon={data.icon} className={classes} onClick={data.onClick}>
                {data.title}
            </Button>
        </div>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
