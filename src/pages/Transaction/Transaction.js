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

import { memo, useEffect, useState } from 'react';
import LoadingOverlayWrapper from 'react-loading-overlay-ts';
import { Link } from 'react-router-dom';
import { handleDate, handleDateTime, handleLevel, handleTypeTransaction } from '~/utils/commonFunc';
import styles from './Transaction.module.scss';
const cx = className.bind(styles);

export default memo(function Transaction({ transactionListData = [] }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const id = Number(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
        if (transactionListData.length > 0)
            transactionListData.forEach((course) => {
                if (course.id === id) {
                    setData(course);
                    setLoading(false);
                }
            });
    }, [transactionListData]);

    return (
        <LoadingOverlayWrapper
            active={loading}
            spinner
            text="Loading..."
            className={cx('overlay')}
            styles={{
                overlay: (base) => ({
                    ...base,
                    background: 'white',
                    color: 'black',
                }),
                spinner: (base) => ({
                    ...base,
                    width: '65px',
                    '& svg circle': {
                        stroke: 'black',
                    },
                }),
            }}
        >
            {!loading ? (
                <div className={cx('transaction')}>
                    <div className={cx('transactionTitleContainer')}>
                        <h1 className={cx('transactionTitle')}>Chi tiết giao dịch</h1>
                    </div>
                    <div className={cx('transactionContainer')}>
                        <div className={cx('transactionShow')}>
                            <Link to={`/user/${data.user.id}`} className={cx('transactionShowTop')}>
                                <img src={data.user.urlAvt} alt="avatar" className={cx('userShowImg')} />
                                <div className={cx('userShowTopTitle')}>
                                    <span className={cx('userShowUserName')}>{data.user.name}</span>
                                    <span className={cx('userShowUserTitle')}>{data.user.username}</span>
                                </div>
                            </Link>
                            <div className={cx('transactionShowBottom')}>
                                <span className={cx('transactionShowTitle')}>Chi tiết tài khoản</span>
                                {data.user.userName ? (
                                    <div className={cx('transactionShowInfo')}>
                                        <PermIdentity className={cx('transactionShowIcon')} />
                                        <span className={cx('transactionShowInfoTitle')}>
                                            Tên tài khoản: {data.user.userName}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.user.birthday ? (
                                    <div className={cx('transactionShowInfo')}>
                                        <CalendarToday className={cx('transactionShowIcon')} />
                                        <span className={cx('transactionShowInfoTitle')}>
                                            Ngày sinh: {handleDate(data.user.birthday)}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.user.phone ? (
                                    <div className={cx('transactionShowInfo')}>
                                        <PhoneAndroid className={cx('transactionShowIcon')} />
                                        <span className={cx('transactionShowInfoTitle')}>
                                            Số điện thoại: {data.user.phone}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.user.email ? (
                                    <div className={cx('transactionShowInfo')}>
                                        <MailOutline className={cx('transactionShowIcon')} />
                                        <span className={cx('transactionShowInfoTitle')}>Email: {data.user.email}</span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.user.level ? (
                                    <div className={cx('transactionShowInfo')}>
                                        <WorkspacePremiumOutlined className={cx('transactionShowIcon')} />
                                        <span className={cx('transactionShowInfoTitle')}>
                                            Cấp bậc: {handleLevel(data.user.level)}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.user.addresses[0] && data.user.addresses[0].fullAddress !== 'string' ? (
                                    <div className={cx('transactionShowInfo')}>
                                        <LocationOnOutlined className={cx('transactionShowIcon')} />
                                        <span className={cx('transactionShowInfoTitle')}>
                                            Địa chỉ: {data.user.addresses[0].fullAddress}
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
                                        <span className={cx('transactionShowInfoTitle')}>
                                            Lời nhắn: "{data.message}"
                                        </span>
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
                                        <span className={cx('transactionShowInfoTitle')}>
                                            Trạng thái: {data.status}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.type ? (
                                    <div className={cx('transactionShowInfo')}>
                                        <TypeSpecimenOutlined className={cx('transactionShowIcon')} />
                                        <span className={cx('transactionShowInfoTitle')}>
                                            Loại giao dịch: {handleTypeTransaction(data.type)}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </LoadingOverlayWrapper>
    );
});
