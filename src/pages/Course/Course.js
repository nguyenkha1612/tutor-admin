import { useState } from 'react';
import className from 'classnames/bind';
import {
    AttachMoney,
    CalendarToday,
    Description,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    School,
    Subject,
    Title,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

import WidgetLg from '~/components/WidgetLg';
import styles from './Course.module.scss';

const cx = className.bind(styles);

const courseData = {
    id: 1,
    title: 'Tuyển gia sư dạy Vẽ',
    description: 'Học viên nam 10 tuổi',
    tuition: '5.000.000 VNĐ',
    status: 'CREATE',
    grade: {
        id: 10,
        name: 'Lớp 10',
    },
    subject: {
        id: 12,
        name: 'Vẽ',
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
};

export default function Course() {
    const [data, setData] = useState(courseData);

    return (
        <div className={cx('course')}>
            <div className={cx('courseTitleContainer')}>
                <h1 className={cx('courseTitle')}>Chi tiết khoá học</h1>
                <Link to="/newCourse">
                    <button className={cx('courseAddButton')}>Tạo mới</button>
                </Link>
            </div>
            <div className={cx('courseContainer')}>
                <div className={cx('courseShow')}>
                    <div className={cx('courseShowBottom')}>
                        <span className={cx('courseShowTitle')}>Thông tin khoá học</span>
                        <div className={cx('courseShowInfo')}>
                            <Title className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>{data.title}</span>
                        </div>
                        <div className={cx('courseShowInfo')}>
                            <Description className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>{data.description}</span>
                        </div>
                        <div className={cx('courseShowInfo')}>
                            <AttachMoney className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>{data.tuition}</span>
                        </div>

                        <span className={cx('courseShowTitle')}>Thông tin môn học</span>
                        <div className={cx('courseShowInfo')}>
                            <Subject className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>{data.subject.name}</span>
                        </div>
                        <div className={cx('courseShowInfo')}>
                            <School className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>{data.grade.name}</span>
                        </div>

                        <span className={cx('courseShowTitle')}>Thông tin người dạy</span>
                        <Link to={'/user/' + data.user.id} className={cx('userShowTop')}>
                            <img src={data.user.avatar} alt="" className={cx('userShowImg')} />
                            <div className={cx('userShowTopTitle')}>
                                <span className={cx('userShowUserName')}>{data.user.name}</span>
                                <span className={cx('userShowUserTitle')}>{data.user.role}</span>
                            </div>
                        </Link>
                        <div className={cx('courseShowInfo')}>
                            <PermIdentity className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>{data.user.userName}</span>
                        </div>
                        <div className={cx('courseShowInfo')}>
                            <CalendarToday className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>{data.user.birthday}</span>
                        </div>
                        <div className={cx('courseShowInfo')}>
                            <PhoneAndroid className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>{data.user.phone}</span>
                        </div>
                        <div className={cx('courseShowInfo')}>
                            <MailOutline className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>{data.user.email}</span>
                        </div>
                        <div className={cx('courseShowInfo')}>
                            <LocationSearching className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>{data.user.address}</span>
                        </div>
                    </div>
                </div>
                <div className={cx('courseUpdate')}>
                    <span className={cx('courseUpdateTitle')}>Chỉnh sửa</span>
                    <form className={cx('courseUpdateForm')}>
                        <div className={cx('courseUpdateLeft')}>
                            <div className={cx('courseUpdateItem')}>
                                <label>Tên khoá học</label>
                                <input type="text" placeholder={data.title} className={cx('courseUpdateInput')} />
                            </div>
                            <div className={cx('courseUpdateItem')}>
                                <label>Mô tả</label>
                                <input type="text" placeholder={data.description} className={cx('courseUpdateInput')} />
                            </div>
                            <div className={cx('courseUpdateItem')}>
                                <label>Tiền lương</label>
                                <input type="text" placeholder={data.tuition} className={cx('courseUpdateInput')} />
                            </div>
                            <div className={cx('courseUpdateItem')}>
                                <label>Môn học</label>
                                <input
                                    type="text"
                                    placeholder={data.subject.name}
                                    className={cx('courseUpdateInput')}
                                />
                            </div>
                            <div className={cx('courseUpdateItem')}>
                                <label>Lớp</label>
                                <input type="text" placeholder={data.grade.name} className={cx('courseUpdateInput')} />
                            </div>
                            <div className={cx('courseUpdateItem')}>
                                <button className={cx('courseUpdateButton')}>Update</button>
                            </div>
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
