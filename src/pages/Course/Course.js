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
    PermIdentity,
    PhoneAndroid,
    School,
    Subject,
    Title,
    WorkspacePremiumOutlined,
} from '@mui/icons-material';
import className from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import { Link, useParams } from 'react-router-dom';
import * as services from '~/services/services';

import {
    handleDate,
    handleDateTime,
    handleGender,
    handleLevel,
    handleQuantity,
    handleStatusCourse,
    handleTime,
} from '~/utils/commonFunc';
import styles from './Course.module.scss';

const cx = className.bind(styles);

export default memo(function Course({ courseListData = [] }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        let isFound = false;
        if (courseListData.length > 0)
            courseListData.forEach((course) => {
                if (course.id === id) {
                    setData(course);
                    setLoading(false);
                    isFound = true;
                }
            });
        if (!isFound) {
            const fetchApi = async (id) => {
                const response = await services.getCourseById(id);
                console.log(response.data.data.data[0]);
                setData(response.data.data.data[0]);
                setLoading(false);
            };
            fetchApi(id);
        }
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
                <div className={cx('course')}>
                    <div className={cx('courseTitleContainer')}>
                        <h1 className={cx('courseTitle')}>Chi tiết khoá học</h1>
                    </div>
                    <div className={cx('courseContainer')}>
                        <div className={cx('courseShow')}>
                            <div className={cx('courseShowBottom')}>
                                <span className={cx('courseShowTitle')}>Thông tin khoá học</span>
                                {data.id ? (
                                    <div className={cx('courseShowInfo')}>
                                        <PermIdentity className={cx('courseShowIcon')} />
                                        <span className={cx('courseShowInfoTitle')}>ID: {data.id}</span>
                                    </div>
                                ) : (
                                    <></>
                                )}
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
                                        <span className={cx('courseShowInfoTitle')}>
                                            Độ tuổi học viên: {data.grade.name}
                                        </span>
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
                                {(data.classRequirement?.dateStart && !data.classRequirement?.dateEnd) ||
                                data.classRequirement?.dateStart === data.classRequirement?.dateEnd ? (
                                    <div className={cx('courseShowInfo')}>
                                        <CalendarToday className={cx('courseShowIcon')} />
                                        <span className={cx('courseShowInfoTitle')}>
                                            Ngày bắt đầu: {handleDate(data.classRequirement.dateStart)}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.classRequirement?.dateStart &&
                                data.classRequirement?.dateEnd &&
                                data.classRequirement?.dateStart !== data.classRequirement?.dateEnd ? (
                                    <div className={cx('courseShowInfo')}>
                                        <CalendarToday className={cx('courseShowIcon')} />
                                        <span className={cx('courseShowInfoTitle')}>
                                            Ngày bắt đầu - kết thúc: {handleDate(data.classRequirement.dateStart)} -{' '}
                                            {handleDate(data.classRequirement.dateEnd)}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.classRequirement.timeLesson ? (
                                    <div className={cx('courseShowInfo')}>
                                        <AccessTimeOutlined className={cx('courseShowIcon')} />
                                        <span className={cx('courseShowInfoTitle')}>
                                            Số giờ học: {Number(data.classRequirement.timeLesson) / 60 + ' phút/buổi'}
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
                                        <span className={cx('courseShowInfoTitle')}>
                                            Trạng thái: {handleStatusCourse(data.status)}
                                        </span>
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
                                    <span className={cx('userShowUserTitle')}>{data.createdBy.username}</span>
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
                                    <span className={cx('courseShowInfoTitle')}>
                                        Số điện thoại: {data.createdBy.phone}
                                    </span>
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
                            <span className={cx('courseShowTitle')}>Thông tin người nhận</span>
                            {data.userApply ? (
                                <Link to={'/user/' + data.userApply.id} className={cx('userShowTop')}>
                                    <img src={data.userApply.urlAvt} alt="avatar" className={cx('userShowImg')} />
                                    <div className={cx('userShowTopTitle')}>
                                        <span className={cx('userShowUserName')}>{data.userApply.name}</span>
                                        <span className={cx('userShowUserTitle')}>{data.userApply.username}</span>
                                    </div>
                                </Link>
                            ) : (
                                <div className={cx('courseShowInfo')}>Chưa có người nhận.</div>
                            )}
                            {data.userApply?.gender ? (
                                <div className={cx('courseShowInfo')}>
                                    <MaleOutlined className={cx('courseShowIcon')} />
                                    <span className={cx('courseShowInfoTitle')}>
                                        Giới tính: {handleGender(data.userApply.gender)}
                                    </span>
                                </div>
                            ) : (
                                <></>
                            )}
                            {data.userApply?.birthday ? (
                                <div className={cx('courseShowInfo')}>
                                    <CalendarToday className={cx('courseShowIcon')} />
                                    <span className={cx('courseShowInfoTitle')}>
                                        Ngày sinh: {handleDate(data.userApply.birthday)}
                                    </span>
                                </div>
                            ) : (
                                <></>
                            )}
                            {data.userApply?.phone ? (
                                <div className={cx('courseShowInfo')}>
                                    <PhoneAndroid className={cx('courseShowIcon')} />
                                    <span className={cx('courseShowInfoTitle')}>
                                        Số điện thoại: {data.userApply.phone}
                                    </span>
                                </div>
                            ) : (
                                <></>
                            )}
                            {data.userApply?.email ? (
                                <div className={cx('courseShowInfo')}>
                                    <MailOutline className={cx('courseShowIcon')} />
                                    <span className={cx('courseShowInfoTitle')}>Email: {data.userApply.email}</span>
                                </div>
                            ) : (
                                <></>
                            )}
                            {data.userApply?.addresses[0] ? (
                                <div className={cx('courseShowInfo')}>
                                    <LocationOnOutlined className={cx('courseShowIcon')} />
                                    <span className={cx('courseShowInfoTitle')}>
                                        Địa chỉ: {data.userApply.addresses[0].fullAddress}
                                    </span>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </LoadingOverlay>
    );
});
