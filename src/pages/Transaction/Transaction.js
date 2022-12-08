import {
    CalendarToday,
    InfoOutlined,
    LocationOnOutlined,
    MailOutline,
    MessageOutlined,
    PaidOutlined,
    Payment,
    PermIdentity,
    PhoneAndroid,
    TypeSpecimenOutlined,
    WorkspacePremiumOutlined,
} from '@mui/icons-material';
import className from 'classnames/bind';

import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { handleDate, handleDateTime, handleLevel, upperCaseFirstLetter } from '~/utils/commonFunc';
import styles from './Transaction.module.scss';
const cx = className.bind(styles);

export default memo(function Transaction() {
    const location = useLocation();
    const { data } = location.state;

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
                            {/* <span className={cx('userShowUserTitle')}>
                                {upperCaseFirstLetter(data.userInfo.roles[0].roleName)}
                            </span> */}
                        </div>
                    </div>
                    <div className={cx('transactionShowBottom')}>
                        <span className={cx('transactionShowTitle')}>Chi tiết tài khoản</span>
                        {data.userInfo.userName ? (
                            <div className={cx('transactionShowInfo')}>
                                <PermIdentity className={cx('transactionShowIcon')} />
                                <span className={cx('transactionShowInfoTitle')}>
                                    Tên tài khoản: {data.userInfo.userName}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.userInfo.birthday ? (
                            <div className={cx('transactionShowInfo')}>
                                <CalendarToday className={cx('transactionShowIcon')} />
                                <span className={cx('transactionShowInfoTitle')}>
                                    Ngày sinh: {handleDate(new Date(data.userInfo.birthday))}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.userInfo.phone ? (
                            <div className={cx('transactionShowInfo')}>
                                <PhoneAndroid className={cx('transactionShowIcon')} />
                                <span className={cx('transactionShowInfoTitle')}>
                                    Số điện thoại: {data.userInfo.phone}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.userInfo.email ? (
                            <div className={cx('transactionShowInfo')}>
                                <MailOutline className={cx('transactionShowIcon')} />
                                <span className={cx('transactionShowInfoTitle')}>Email: {data.userInfo.email}</span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.userInfo.level ? (
                            <div className={cx('transactionShowInfo')}>
                                <WorkspacePremiumOutlined className={cx('transactionShowIcon')} />
                                <span className={cx('transactionShowInfoTitle')}>
                                    Cấp bậc: {handleLevel(data.userInfo.level)}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.userInfo.addresses[0] && data.userInfo.addresses[0].fullAddress !== 'string' ? (
                            <div className={cx('transactionShowInfo')}>
                                <LocationOnOutlined className={cx('transactionShowIcon')} />
                                <span className={cx('transactionShowInfoTitle')}>
                                    Địa chỉ: {data.userInfo.addresses[0].fullAddress}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
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
                                Ngày giao dịch: {handleDateTime(new Date(data.createdAt))}
                            </span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <PaidOutlined className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>
                                Số tiền giao dịch: {data.amount} {data.currencyCode}
                            </span>
                        </div>
                        {data.method ? (
                            <div className={cx('transactionShowInfo')}>
                                <Payment className={cx('transactionShowIcon')} />
                                <span className={cx('transactionShowInfoTitle')}>
                                    Phương thức giao dịch: {data.method}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.message ? (
                            <div className={cx('transactionShowInfo')}>
                                <MessageOutlined className={cx('transactionShowIcon')} />
                                <span className={cx('transactionShowInfoTitle')}>Lời nhắn: "{data.message}"</span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.method && data.transactionId ? (
                            <div className={cx('transactionShowInfo')}>
                                <PermIdentity className={cx('transactionShowIcon')} />
                                <span className={cx('transactionShowInfoTitle')}>
                                    ID {data.method}: {data.transactionId}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.status ? (
                            <div className={cx('transactionShowInfo')}>
                                <InfoOutlined className={cx('transactionShowIcon')} />
                                <span className={cx('transactionShowInfoTitle')}>Trạng thái: {data.status}</span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.type ? (
                            <div className={cx('transactionShowInfo')}>
                                <TypeSpecimenOutlined className={cx('transactionShowIcon')} />
                                <span className={cx('transactionShowInfoTitle')}>Loại giao dịch: {data.type}</span>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});
