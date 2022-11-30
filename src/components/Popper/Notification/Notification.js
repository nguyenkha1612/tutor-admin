import PropTypes from 'prop-types';
import className from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import NotificationItem from './NotificationItem';
import styles from './Notification.module.scss';

const cx = className.bind(styles);

const defaultFn = () => {};

function Notification({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <NotificationItem key={index} data={item} />;
        });
    };

    return (
        <Tippy
            interactive
            offset={[16, 12]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            delay={[0, 750]}
            render={(attrs) => (
                <div className={cx('notification-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('notification-popper')}>
                        <div className={cx('notification-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Notification.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Notification;
