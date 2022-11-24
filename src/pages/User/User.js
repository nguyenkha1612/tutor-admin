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
import styles from './User.module.scss';

const cx = className.bind(styles);

export default function User() {
    return (
        <div className={cx('user')}>
            <div className={cx('userTitleContainer')}>
                <h1 className={cx('userTitle')}>Edit User</h1>
                <Link to="/newUser">
                    <button className={cx('userAddButton')}>Create</button>
                </Link>
            </div>
            <div className={cx('userContainer')}>
                <div className={cx('userShow')}>
                    <div className={cx('userShowTop')}>
                        <img
                            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className={cx('userShowImg')}
                        />
                        <div className={cx('userShowTopTitle')}>
                            <span className={cx('userShowUsername')}>Anna Becker</span>
                            <span className={cx('userShowUserTitle')}>Software Engineer</span>
                        </div>
                    </div>
                    <div className={cx('userShowBottom')}>
                        <span className={cx('userShowTitle')}>Account Details</span>
                        <div className={cx('userShowInfo')}>
                            <PermIdentity className={cx('userShowIcon')} />
                            <span className={cx('userShowInfoTitle')}>annabeck99</span>
                        </div>
                        <div className={cx('userShowInfo')}>
                            <CalendarToday className={cx('userShowIcon')} />
                            <span className={cx('userShowInfoTitle')}>10.12.1999</span>
                        </div>
                        <span className={cx('userShowTitle')}>Contact Details</span>
                        <div className={cx('userShowInfo')}>
                            <PhoneAndroid className={cx('userShowIcon')} />
                            <span className={cx('userShowInfoTitle')}>+1 123 456 67</span>
                        </div>
                        <div className={cx('userShowInfo')}>
                            <MailOutline className={cx('userShowIcon')} />
                            <span className={cx('userShowInfoTitle')}>annabeck99@gmail.com</span>
                        </div>
                        <div className={cx('userShowInfo')}>
                            <LocationSearching className={cx('userShowIcon')} />
                            <span className={cx('userShowInfoTitle')}>New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className={cx('userUpdate')}>
                    <span className={cx('userUpdateTitle')}>Edit</span>
                    <form className={cx('userUpdateForm')}>
                        <div className={cx('userUpdateLeft')}>
                            <div className={cx('userUpdateItem')}>
                                <label>Username</label>
                                <input type="text" placeholder="annabeck99" className={cx('userUpdateInput')} />
                            </div>
                            <div className={cx('userUpdateItem')}>
                                <label>Full Name</label>
                                <input type="text" placeholder="Anna Becker" className={cx('userUpdateInput')} />
                            </div>
                            <div className={cx('userUpdateItem')}>
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="annabeck99@gmail.com"
                                    className={cx('userUpdateInput')}
                                />
                            </div>
                            <div className={cx('userUpdateItem')}>
                                <label>Phone</label>
                                <input type="text" placeholder="+1 123 456 67" className={cx('userUpdateInput')} />
                            </div>
                            <div className={cx('userUpdateItem')}>
                                <label>Address</label>
                                <input type="text" placeholder="New York | USA" className={cx('userUpdateInput')} />
                            </div>
                        </div>
                        <div className={cx('userUpdateRight')}>
                            <div className={cx('userUpdateUpload')}>
                                <img
                                    className={cx('userUpdateImg')}
                                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
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
        </div>
    );
}
