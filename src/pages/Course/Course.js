import {
    AccessTimeOutlined,
    AttachMoney,
    CalendarToday,
    Description,
    InfoOutlined,
    LocationOnOutlined,
    MailOutline,
    MaleOutlined,
    PeopleAltOutlined,
    PhoneAndroid,
    School,
    Subject,
    Title,
    WorkspacePremiumOutlined,
} from '@mui/icons-material';
import className from 'classnames/bind';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { handleDate, handleDateTime, handleGender, handleLevel, handleQuantity } from '~/utils/commonFunc';
import styles from './Course.module.scss';

const cx = className.bind(styles);

export default memo(function Course() {
    const location = useLocation();
    const { data } = location.state;

    console.log(data);

    return (
        <div className={cx('course')}>
            <div className={cx('courseTitleContainer')}>
                <h1 className={cx('courseTitle')}>Chi tiết khoá học</h1>
            </div>
            <div className={cx('courseContainer')}>
                <div className={cx('courseShow')}>
                    <div className={cx('courseShowBottom')}>
                        <span className={cx('courseShowTitle')}>Thông tin khoá học</span>
                        {data.title ? (
                            <div className={cx('courseShowInfo')}>
                                <Title className={cx('courseShowIcon')} />
                                <span className={cx('courseShowInfoTitle')}>Tên khoá học: {data.title}</span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.description ? (
                            <div className={cx('courseShowInfo')}>
                                <Description className={cx('courseShowIcon')} />
                                <span className={cx('courseShowInfoTitle')}>Mô tả: {data.description}</span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.subject.name ? (
                            <div className={cx('courseShowInfo')}>
                                <Subject className={cx('courseShowIcon')} />
                                <span className={cx('courseShowInfoTitle')}>Môn học: {data.subject.name}</span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.grade.name ? (
                            <div className={cx('courseShowInfo')}>
                                <School className={cx('courseShowIcon')} />
                                <span className={cx('courseShowInfoTitle')}>Độ tuổi học viên: {data.grade.name}</span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.classRequirement.level ? (
                            <div className={cx('courseShowInfo')}>
                                <WorkspacePremiumOutlined className={cx('courseShowIcon')} />
                                <span className={cx('courseShowInfoTitle')}>
                                    Cấp bậc giảng viên: {handleLevel(data.classRequirement.level)}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.classRequirement.address && data.classRequirement.address.fullAddress ? (
                            <div className={cx('courseShowInfo')}>
                                <LocationOnOutlined className={cx('courseShowIcon')} />
                                <span className={cx('courseShowInfoTitle')}>
                                    Địa chỉ: {data.classRequirement.address.fullAddress}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.classRequirement.amountStudent ? (
                            <div className={cx('courseShowInfo')}>
                                <PeopleAltOutlined className={cx('courseShowIcon')} />
                                <span className={cx('courseShowInfoTitle')}>
                                    Sĩ số: {data.classRequirement.amountStudent}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.classRequirement.dateStart && !data.classRequirement.dateEnd ? (
                            <div className={cx('courseShowInfo')}>
                                <CalendarToday className={cx('courseShowIcon')} />
                                <span className={cx('courseShowInfoTitle')}>
                                    Thời gian dạy: {handleDate(data.classRequirement.dateStart)}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.classRequirement.dateStart && data.classRequirement.dateEnd ? (
                            <div className={cx('courseShowInfo')}>
                                <CalendarToday className={cx('courseShowIcon')} />
                                <span className={cx('courseShowInfoTitle')}>
                                    Thời gian dạy: {handleDate(data.classRequirement.dateStart)}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.classRequirement.timeLesson ? (
                            <div className={cx('courseShowInfo')}>
                                <AccessTimeOutlined className={cx('courseShowIcon')} />
                                <span className={cx('courseShowInfoTitle')}>
                                    Số giờ học: {data.classRequirement.timeLesson + ' giờ'}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                        {data.tuition ? (
                            <div className={cx('courseShowInfo')}>
                                <AttachMoney className={cx('courseShowIcon')} />
                                <span className={cx('courseShowInfoTitle')}>
                                    Tiền lương: {handleQuantity(data.tuition, '.', ' VNĐ')}
                                </span>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className={cx('courseShowInfo')}>
                            <CalendarToday className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>
                                Ngày tạo: {handleDateTime(new Date(data.createdAt))}
                            </span>
                        </div>
                        {data.status ? (
                            <div className={cx('courseShowInfo')}>
                                <InfoOutlined className={cx('courseShowIcon')} />
                                <span className={cx('courseShowInfoTitle')}>Trạng thái: {data.status}</span>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div className={cx('courseUpdate')}>
                    <span className={cx('courseShowTitle')}>Thông tin người tạo</span>
                    <Link to={'/user/' + data.createdBy.id} className={cx('userShowTop')}>
                        <img src={data.createdBy.urlAvt} alt="avatar" className={cx('userShowImg')} />
                        <div className={cx('userShowTopTitle')}>
                            <span className={cx('userShowUserName')}>{data.createdBy.name}</span>
                            {/* <span className={cx('userShowUserTitle')}>{data.createdBy.role}</span> */}
                        </div>
                    </Link>
                    {data.createdBy.gender ? (
                        <div className={cx('courseShowInfo')}>
                            <MaleOutlined className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>
                                Giới tính: {handleGender(data.createdBy.gender)}
                            </span>
                        </div>
                    ) : (
                        <></>
                    )}
                    {data.createdBy.birthday ? (
                        <div className={cx('courseShowInfo')}>
                            <CalendarToday className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>
                                Ngày sinh: {handleDate(data.createdBy.birthday)}
                            </span>
                        </div>
                    ) : (
                        <></>
                    )}
                    {data.createdBy.phone ? (
                        <div className={cx('courseShowInfo')}>
                            <PhoneAndroid className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>Số điện thoại: {data.createdBy.phone}</span>
                        </div>
                    ) : (
                        <></>
                    )}
                    {data.createdBy.email ? (
                        <div className={cx('courseShowInfo')}>
                            <MailOutline className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>Email: {data.createdBy.email}</span>
                        </div>
                    ) : (
                        <></>
                    )}
                    {data.createdBy.addresses[0] ? (
                        <div className={cx('courseShowInfo')}>
                            <LocationOnOutlined className={cx('courseShowIcon')} />
                            <span className={cx('courseShowInfoTitle')}>
                                Địa chỉ: {data.createdBy.addresses[0].fullAddress}
                            </span>
                        </div>
                    ) : (
                        <></>
                    )}
                    {/* <span className={cx('courseUpdateTitle')}>Chỉnh sửa</span>
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
                    </form> */}
                </div>
            </div>
            <div className={cx('transactionsContainer')}>{/* <WidgetLg /> */}</div>
        </div>
    );
});
