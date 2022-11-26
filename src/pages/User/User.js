import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from '@mui/icons-material';
import WidgetLg from '~/components/WidgetLg';

import styles from './User.module.scss';

const cx = className.bind(styles);

const userData = {
    id: 1,
    avatar: 'https://i.pinimg.com/originals/a2/2b/fc/a22bfc39b99bacf8d3641d991093ff86.jpg',
    name: 'Arianmu Grandu',
    role: 'Học sinh',
    userName: 'arianmugrandidi',
    birthday: '10/12/1999',
    phone: '+84 323 568 452',
    email: 'arianmu@gmail.com',
    address: 'New York | USA',
    transaction: {},
};

export default function User() {
    return (
        <div className={cx('user')}>
            <div className={cx('userTitleContainer')}>
                <h1 className={cx('userTitle')}>Chi tiết người dùng</h1>
                <Link to="/newUser">
                    <button className={cx('userAddButton')}>Tạo mới</button>
                </Link>
            </div>
            <div className={cx('userContainer')}>
                <div className={cx('userShow')}>
                    <div className={cx('userShowTop')}>
                        <img src={userData.avatar} alt="" className={cx('userShowImg')} />
                        <div className={cx('userShowTopTitle')}>
                            <span className={cx('userShowUsername')}>{userData.name}</span>
                            <span className={cx('userShowUserTitle')}>{userData.role}</span>
                        </div>
                    </div>
                    <div className={cx('userShowBottom')}>
                        <span className={cx('userShowTitle')}>Chi tiết tài khoản</span>
                        <div className={cx('userShowInfo')}>
                            <PermIdentity className={cx('userShowIcon')} />
                            <span className={cx('userShowInfoTitle')}>{userData.userName}</span>
                        </div>
                        <div className={cx('userShowInfo')}>
                            <CalendarToday className={cx('userShowIcon')} />
                            <span className={cx('userShowInfoTitle')}>{userData.birthday}</span>
                        </div>
                        <span className={cx('userShowTitle')}>Thông tin liên lạc</span>
                        <div className={cx('userShowInfo')}>
                            <PhoneAndroid className={cx('userShowIcon')} />
                            <span className={cx('userShowInfoTitle')}>{userData.phone}</span>
                        </div>
                        <div className={cx('userShowInfo')}>
                            <MailOutline className={cx('userShowIcon')} />
                            <span className={cx('userShowInfoTitle')}>{userData.email}</span>
                        </div>
                        <div className={cx('userShowInfo')}>
                            <LocationSearching className={cx('userShowIcon')} />
                            <span className={cx('userShowInfoTitle')}>{userData.address}</span>
                        </div>
                    </div>
                </div>
                <div className={cx('userUpdate')}>
                    <span className={cx('userUpdateTitle')}>Chỉnh sửa</span>
                    <form className={cx('userUpdateForm')}>
                        <div className={cx('userUpdateLeft')}>
                            <div className={cx('userUpdateItem')}>
                                <label>Tên tài khoản</label>
                                <input type="text" placeholder={userData.userName} className={cx('userUpdateInput')} />
                            </div>
                            <div className={cx('userUpdateItem')}>
                                <label>Tên đầy đủ</label>
                                <input type="text" placeholder={userData.name} className={cx('userUpdateInput')} />
                            </div>
                            <div className={cx('userUpdateItem')}>
                                <label>Email</label>
                                <input type="text" placeholder={userData.email} className={cx('userUpdateInput')} />
                            </div>
                            <div className={cx('userUpdateItem')}>
                                <label>Số điện thoại</label>
                                <input type="text" placeholder={userData.phone} className={cx('userUpdateInput')} />
                            </div>
                            <div className={cx('userUpdateItem')}>
                                <label>Địa chỉ</label>
                                <input type="text" placeholder={userData.address} className={cx('userUpdateInput')} />
                            </div>
                        </div>
                        <div className={cx('userUpdateRight')}>
                            <div className={cx('userUpdateUpload')}>
                                <img className={cx('userUpdateImg')} src={userData.avatar} alt="" />
                                <label htmlFor="file">
                                    <Publish className={cx('userUpdateIcon')} />
                                </label>
                                <input type="file" id="file" style={{ display: 'none' }} />
                            </div>
                            <button className={cx('userUpdateButton')}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={cx('transactionsContainer')}>
                <WidgetLg />
            </div>
        </div>
    );
}
