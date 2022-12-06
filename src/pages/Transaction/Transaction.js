import {
    AttachMoney,
    CalendarToday,
    LocationSearching,
    Mail,
    MailOutline,
    Payment,
    PermIdentity,
    PhoneAndroid,
    Public,
    Subject,
} from '@mui/icons-material';
import className from 'classnames/bind';

import { memo, useState } from 'react';
import styles from './Transaction.module.scss';

const cx = className.bind(styles);

const transactionData = {
    id: 1,
    total: '50.000 VNĐ',
    createDate: '2022-11-19 15:42:14',
    paymentMethod: {
        id: 1,
        name: 'Paypal',
    },
    user: {
        id: 1,
        avatar: 'https://i.pinimg.com/originals/a2/2b/fc/a22bfc39b99bacf8d3641d991093ff86.jpg',
        name: 'Arianmu Grandu',
        role: 'Học sinh',
        userName: 'arianmugrandidi',
        birthday: '10/12/1999',
        phone: '+84 323 568 452',
        email: 'arianmu@gmail.com',
        address: 'New York | USA',
    },
    payeeEmail: 'sb-skr47t22139193@business.example.com',
    payerInfo: {
        id: '6CMCKDY4VSW6J',
        email: 'sb-5nbx4722139618@personal.example.com',
        firstName: 'John',
        lastName: 'Doe',
        countryCode: 'US',
    },
};

export default memo(function Transaction() {
    // eslint-disable-next-line
    let [data, setData] = useState(transactionData);

    return (
        <div className={cx('transaction')}>
            <div className={cx('transactionTitleContainer')}>
                <h1 className={cx('transactionTitle')}>Chi tiết giao dịch</h1>
            </div>
            <div className={cx('transactionContainer')}>
                <div className={cx('transactionShow')}>
                    <div className={cx('transactionShowTop')}>
                        <img src={data.user.avatar} alt="" className={cx('userShowImg')} />
                        <div className={cx('userShowTopTitle')}>
                            <span className={cx('userShowUserName')}>{data.user.name}</span>
                            <span className={cx('userShowUserTitle')}>{data.user.role}</span>
                        </div>
                    </div>
                    <div className={cx('transactionShowBottom')}>
                        <span className={cx('transactionShowTitle')}>Chi tiết tài khoản</span>
                        <div className={cx('transactionShowInfo')}>
                            <PermIdentity className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>{data.user.userName}</span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <CalendarToday className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>{data.user.birthday}</span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <PhoneAndroid className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>{data.user.phone}</span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <MailOutline className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>{data.user.email}</span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <LocationSearching className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>{data.user.address}</span>
                        </div>
                    </div>
                </div>
                <div className={cx('transactionShow')}>
                    <div className={cx('transactionShowBottom')}>
                        <span className={cx('transactionShowTitle')}>Chi tiết giao dịch</span>
                        <div className={cx('transactionShowInfo')}>
                            <PermIdentity className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>{data.id}</span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <CalendarToday className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>{data.createDate}</span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <AttachMoney className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>{data.total}</span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <Payment className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>{data.paymentMethod.name}</span>
                        </div>

                        <span className={cx('transactionShowTitle')}>Tài khoản ngân hàng người gửi</span>
                        <div className={cx('transactionShowInfo')}>
                            <PermIdentity className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>{data.payerInfo.id}</span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <Subject className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>
                                {data.payerInfo.firstName} {data.payerInfo.lastName}
                            </span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <MailOutline className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>{data.payerInfo.email}</span>
                        </div>
                        <div className={cx('transactionShowInfo')}>
                            <Public className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>{data.payerInfo.countryCode}</span>
                        </div>

                        <span className={cx('transactionShowTitle')}>Tài khoản ngân hàng người nhận</span>
                        <div className={cx('transactionShowInfo')}>
                            <Mail className={cx('transactionShowIcon')} />
                            <span className={cx('transactionShowInfoTitle')}>{data.payeeEmail}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
