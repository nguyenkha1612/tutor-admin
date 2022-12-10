import {
    CalendarToday,
    LocationOnOutlined,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
    WorkspacePremiumOutlined,
} from '@mui/icons-material';
import className from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import * as services from '~/services/services';
import { handleDate, handleLevel } from '~/utils/commonFunc';
import styles from './User.module.scss';

const cx = className.bind(styles);

export default memo(function User() {
    let id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    const user = useRef({});
    const [loading, setLoading] = useState(true);

    const fetchApi = async () => {
        setLoading(true);
        const userResponse = await services.getUserById(id);
        user.current = userResponse.data;
        console.log(user.current);
        setLoading(false);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <LoadingOverlay
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
                <div className={cx('user')}>
                    <div className={cx('userTitleContainer')}>
                        <h1 className={cx('userTitle')}>Chi tiết người dùng</h1>
                    </div>
                    <div className={cx('userContainer')}>
                        <div className={cx('userShow')}>
                            <div className={cx('userShowTop')}>
                                <img src={user.current.urlAvt} alt="avatar" className={cx('userShowImg')} />
                                <div className={cx('userShowTopTitle')}>
                                    <span className={cx('userShowUsername')}>{user.current.name}</span>
                                    <span className={cx('userShowUserTitle')}>{user.current.name}</span>
                                </div>
                            </div>
                            <div className={cx('userShowBottom')}>
                                <span className={cx('userShowTitle')}>Chi tiết tài khoản</span>
                                {user.current.username ? (
                                    <div className={cx('userShowInfo')}>
                                        <PermIdentity className={cx('userShowIcon')} />
                                        <span className={cx('userShowInfoTitle')}>
                                            Tên tài khoản: {user.current.username}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {user.current.birthday ? (
                                    <div className={cx('userShowInfo')}>
                                        <CalendarToday className={cx('userShowIcon')} />
                                        <span className={cx('userShowInfoTitle')}>
                                            Ngày sinh: {handleDate(user.current.birthday)}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {user.current.phone ? (
                                    <div className={cx('userShowInfo')}>
                                        <PhoneAndroid className={cx('userShowIcon')} />
                                        <span className={cx('userShowInfoTitle')}>
                                            Số điện thoại: {user.current.phone}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {user.current.email ? (
                                    <div className={cx('userShowInfo')}>
                                        <MailOutline className={cx('userShowIcon')} />
                                        <span className={cx('userShowInfoTitle')}>Email: {user.current.email}</span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {user.current.level ? (
                                    <div className={cx('userShowInfo')}>
                                        <WorkspacePremiumOutlined className={cx('userShowIcon')} />
                                        <span className={cx('userShowInfoTitle')}>
                                            Cấp bậc: {handleLevel(user.current.level)}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {!user.current.addresses.length === 0 ? (
                                    <div className={cx('userShowInfo')}>
                                        <LocationOnOutlined className={cx('userShowIcon')} />
                                        <span className={cx('userShowInfoTitle')}>
                                            Địa chỉ: {user.current.addresses[0].fullAddress}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className={cx('userUpdate')}>
                            <span className={cx('userUpdateTitle')}>Chỉnh sửa</span>
                            <form className={cx('userUpdateForm')}>
                                <div className={cx('userUpdateLeft')}>
                                    <div className={cx('userUpdateItem')}>
                                        <label>Tên tài khoản</label>
                                        <input
                                            type="text"
                                            placeholder={user.current.username}
                                            className={cx('userUpdateInput')}
                                        />
                                    </div>
                                    <div className={cx('userUpdateItem')}>
                                        <label>Tên đầy đủ</label>
                                        <input
                                            type="text"
                                            placeholder={user.current.name}
                                            className={cx('userUpdateInput')}
                                        />
                                    </div>
                                    <div className={cx('userUpdateItem')}>
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            placeholder={user.current.email}
                                            className={cx('userUpdateInput')}
                                        />
                                    </div>
                                    <div className={cx('userUpdateItem')}>
                                        <label>Số điện thoại</label>
                                        <input
                                            type="text"
                                            placeholder={user.current.phone}
                                            className={cx('userUpdateInput')}
                                        />
                                    </div>
                                    <div className={cx('userUpdateItem')}>
                                        <label>Địa chỉ</label>
                                    </div>
                                </div>
                                <div className={cx('userUpdateRight')}>
                                    <div className={cx('userUpdateUpload')}>
                                        <img className={cx('userUpdateImg')} src={user.current.urlAvt} alt="avatar" />
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
                    <div className={cx('transactionsContainer')}>{/* <WidgetLg /> */}</div>
                </div>
            ) : (
                <></>
            )}
        </LoadingOverlay>
    );
});
