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
import { memo, useEffect, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import { useParams } from 'react-router-dom';
import WidgetLg from '~/components/WidgetLg';
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

export default memo(function User({ userListData = [], transactionListData = [] }) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState([]);
    const [courses, setCourses] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchApiCourses = async () => {
            const response = await services.getCourseListByUser(id);
            setCourses(response.data.data);
        };

        const fetchApiTransactions = async () => {
            const response = await services.getTransactionByUserId(id);
            setTransactions(response.data);
        };

        const fetchApiUser = () => {
            let isFound = false;
            userListData.forEach((user) => {
                if (user.id === id) {
                    setUser(user);
                    isFound = true;
                    setLoading(false);
                }
            });

            if (!isFound) {
                const fetchApi = async (id) => {
                    const response = await services.getUserById(id);
                    console.log(response.data);
                    setUser(response.data);
                    setLoading(false);
                };
                fetchApi(id);
            }

            setTransactions(
                transactionListData.filter((transaction) => {
                    return transaction.user.id === id;
                }),
            );
        };

        fetchApiUser();
        fetchApiCourses();
        fetchApiTransactions();
    }, [id]);

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
                                    <img src={user.urlAvt} alt="avatar" className={cx('userShowImg')} />
                                    <div className={cx('userShowTopTitle')}>
                                        <span className={cx('userShowUsername')}>{user.name}</span>
                                        <span className={cx('userShowUserTitle')}>{user.username}</span>
                                    </div>
                                </div>
                                <div className={cx('userShowBottom')}>
                                    <span className={cx('userShowTitle')}>Chi tiết tài khoản</span>
                                    {user.username ? (
                                        <div className={cx('userShowInfo')}>
                                            <PermIdentity className={cx('userShowIcon')} />
                                            <span className={cx('userShowInfoTitle')}>
                                                Tên tài khoản: {user.username}
                                            </span>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                    {user.birthday ? (
                                        <div className={cx('userShowInfo')}>
                                            <CalendarToday className={cx('userShowIcon')} />
                                            <span className={cx('userShowInfoTitle')}>
                                                Ngày sinh: {handleDate(user.birthday)}
                                            </span>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                    {user.gender ? (
                                        <div className={cx('userShowInfo')}>
                                            <MaleOutlined className={cx('userShowIcon')} />
                                            <span className={cx('userShowInfoTitle')}>
                                                Giới tính: {handleGender(user.gender)}
                                            </span>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                    {user.level ? (
                                        <div className={cx('userShowInfo')}>
                                            <WorkspacePremiumOutlined className={cx('userShowIcon')} />
                                            <span className={cx('userShowInfoTitle')}>
                                                Cấp bậc: {handleLevel(user.level)}
                                            </span>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                    {user.createdAt ? (
                                        <div className={cx('userShowInfo')}>
                                            <ScheduleOutlined className={cx('userShowIcon')} />
                                            <span className={cx('userShowInfoTitle')}>
                                                Ngày tham gia: {handleDate(user.createdAt)}
                                            </span>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                    <span className={cx('userShowTitle')}>Thông tin liên lạc</span>
                                    {user.phone ? (
                                        <div className={cx('userShowInfo')}>
                                            <PhoneAndroid className={cx('userShowIcon')} />
                                            <span className={cx('userShowInfoTitle')}>Số điện thoại: {user.phone}</span>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                    {user.email ? (
                                        <div className={cx('userShowInfo')}>
                                            <MailOutline className={cx('userShowIcon')} />
                                            <span className={cx('userShowInfoTitle')}>Email: {user.email}</span>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                    {user.addresses[0] ? (
                                        user.addresses.map((address, index) => {
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
                                <div className={cx('avatar')} style={{ backgroundImage: `url(${user.urlAvt})` }}></div>
                                {user.introduce ? (
                                    <>
                                        <span className={cx('userShowTitle')}>Giới thiệu bản thân</span>
                                        <div className={cx('introduce')}>"{user.introduce}"</div>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                    {courses.length > 0 ? (
                        <div className={cx('transactionsContainer')}>
                            <WidgetLg title={'Lớp học đã tạo'} data={courses} col={widgetCourseCol} type={'course'} />
                        </div>
                    ) : (
                        <></>
                    )}
                    {transactions.length > 0 ? (
                        <div className={cx('transactionsContainer')}>
                            <WidgetLg title={'Giao dịch đã thực hiện'} data={transactions} col={widgetTransactionCol} />
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <></>
            )}
        </LoadingOverlay>
    );
});
