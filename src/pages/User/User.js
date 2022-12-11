import {
    CalendarToday,
    LocationOnOutlined,
    MailOutline,
    MaleOutlined,
    PermIdentity,
    PhoneAndroid,
    ScheduleOutlined,
    WorkspacePremiumOutlined,
} from '@mui/icons-material';
import className from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import WidgetLg from '~/components/WidgetLg';
import WidgetSm from '~/components/WidgetSm';
import * as services from '~/services/services';
import { handleDate, handleGender, handleLevel } from '~/utils/commonFunc';
import styles from './User.module.scss';

const cx = className.bind(styles);

const options = [
    { label: 'active', value: true, color: '#77dd77' },
    { label: 'inactive', value: false, color: '#ff6961' },
];

const widgetTransactionCol = ['Khách hàng', 'Ngày giao dịch', 'Số tiền', 'Trạng thái'];
const widgetCourseCol = ['Tiêu đề', 'Học phí', 'Trạng thái', 'Chi tiết'];

export default memo(function User() {
    let id = Number(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
    const user = useRef({});
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState([]);
    const [courses, setCourses] = useState([]);

    const fetchApi = async () => {
        setLoading(true);
        const userResponse = await services.getUserById(id);
        user.current = userResponse.data;
        console.log(user.current);

        const transactionsResponse = await services.getTransactionList();
        let transactions = [];
        transactionsResponse.data.forEach((transaction) => {
            if (transaction.user.id === id) transactions.push(transaction);
        });
        setTransactions(transactions);

        const coursesResponse = await services.getCourseList();
        let courses = [];
        coursesResponse.data.data.forEach((course) => {
            if (course.createdBy.id === id) courses.push(course);
        });
        setCourses(courses);

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
                        <select className={cx('select')}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('userContainer')}>
                        <div className={cx('userShow')}>
                            <div className={cx('info-wrapper')}>
                                <div className={cx('userShowTop')}>
                                    <img src={user.current.urlAvt} alt="avatar" className={cx('userShowImg')} />
                                    <div className={cx('userShowTopTitle')}>
                                        <span className={cx('userShowUsername')}>{user.current.name}</span>
                                        <span className={cx('userShowUserTitle')}>{user.current.username}</span>
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
                                    {user.current.gender ? (
                                        <div className={cx('userShowInfo')}>
                                            <MaleOutlined className={cx('userShowIcon')} />
                                            <span className={cx('userShowInfoTitle')}>
                                                Giới tính: {handleGender(user.current.gender)}
                                            </span>
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
                                    {user.current.createdAt ? (
                                        <div className={cx('userShowInfo')}>
                                            <ScheduleOutlined className={cx('userShowIcon')} />
                                            <span className={cx('userShowInfoTitle')}>
                                                Ngày tham gia: {handleDate(user.current.createdAt)}
                                            </span>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                    <span className={cx('userShowTitle')}>Thông tin liên lạc</span>
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
                                    {user.current.addresses[0] ? (
                                        user.current.addresses.map((address, index) => {
                                            return (
                                                <div key={index} className={cx('userShowInfo')}>
                                                    <LocationOnOutlined className={cx('userShowIcon')} />
                                                    <span className={cx('userShowInfoTitle')}>
                                                        Địa chỉ{index === 0 ? '' : ' ' + index}: {address.fullAddress}
                                                    </span>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                            <div className={cx('avatar-wrapper')}>
                                <span className={cx('userShowTitle')}>Ảnh đại diện</span>
                                <div
                                    className={cx('avatar')}
                                    style={{ backgroundImage: `url(${user.current.urlAvt})` }}
                                ></div>
                                {user.current.introduce ? (
                                    <>
                                        <span className={cx('userShowTitle')}>Giới thiệu bản thân</span>
                                        <div className={cx('introduce')}>"{user.current.introduce}"</div>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={cx('transactionsContainer')}>
                        <WidgetLg title={'Lớp học đã tạo'} data={courses} col={widgetCourseCol} type={'course'} />
                    </div>
                    <div className={cx('transactionsContainer')}>
                        <WidgetLg title={'Giao dịch đã thực hiện'} data={transactions} col={widgetTransactionCol} />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </LoadingOverlay>
    );
});
