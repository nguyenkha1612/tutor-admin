import {
    CalendarToday,
    InfoOutlined,
    LocationOnOutlined,
    MailOutline,
    PaidOutlined,
    Payment,
    PermIdentity,
    PhoneAndroid,
    TypeSpecimenOutlined,
} from '@mui/icons-material';
import className from 'classnames/bind';

import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { handleDate, handleDateTime, upperCaseFirstLetter } from '~/utils/commonFunc';
import styles from './Transaction.module.scss';
const cx = className.bind(styles);

export default memo(function Transaction() {
    const location = useLocation();
    const { data } = location.state;
    const nullInfo = 'Trống';

    console.log(data);

    return (
        <div className={cx('transaction')}>
            <div className={cx('transactionTitleContainer')}>
                <h1 className={cx('transactionTitle')}>Chi tiết giao dịch</h1>
            </div>
            <div className={cx('transactionContainer')}>
                <div className={cx('transactionShow')}>
                    <div className={cx('transactionShowTop')}>
                        <img src={data.userInfo.urlAvt} alt="avatar" className={cx('userShowImg')} />
                        <div className={cx('userShowTopTitle')}>
                            <span className={cx('userShowUserName')}>{data.userInfo.name}</span>
                            <span className={cx('userShowUserTitle')}>
                                {upperCaseFirstLetter(data.userInfo.roles[0].roleName)}
                            </span>
                        </div>
                    </div>
                    <div className={cx('transactionShowBottom')}>
                        <span className={cx('transactionShowTitle')}>Chi tiết tài khoản</span>
                        <div className={cx('transactionShowInfo')}>
                            <PermIdentity className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>
                                Tên tài khoản: {data.userInfo.userName || nullInfo}
                            </span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <CalendarToday className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>
                                Ngày sinh: {handleDate(new Date(data.userInfo.birthday)) || nullInfo}
                            </span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <PhoneAndroid className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>
                                Số điện thoại: {data.userInfo.phone || nullInfo}
                            </span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <MailOutline className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>
                                Email: {data.userInfo.email || nullInfo}
                            </span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <LocationOnOutlined className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>
                                Địa chỉ: {data.userInfo.addresses[0] || nullInfo}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('transactionShow')}>
                    <div className={cx('transactionShowBottom')}>
                        <span className={cx('transactionShowTitle')}>Chi tiết giao dịch</span>
                        <div className={cx('transactionShowInfo')}>
                            <PermIdentity className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>ID: {data.id}</span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <CalendarToday className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>
                                Ngày giao dịch: {handleDateTime(new Date(data.createdAt) || nullInfo)}
                            </span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <PaidOutlined className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>
                                Số tiền giao dịch: {data.amount} {data.currencyCode}
                            </span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <Payment className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>
                                Phương thức giao dịch: {data.method || nullInfo}
                            </span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <PermIdentity className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>
                                ID {data.method}: {data.transactionId}
                            </span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <InfoOutlined className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>Trạng thái: {data.status}</span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <TypeSpecimenOutlined className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>Loại giao dịch: {data.type}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
