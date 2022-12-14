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
                        <h1 className={cx('courseTitle')}>Chi ti???t kho?? h???c</h1>
                    </div>
                    <div className={cx('courseContainer')}>
                        <div className={cx('courseShow')}>
                            <div className={cx('courseShowBottom')}>
                                <span className={cx('courseShowTitle')}>Th??ng tin kho?? h???c</span>
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
                                        <span className={cx('courseShowInfoTitle')}>T??n kho?? h???c: {data.title}</span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.description ? (
                                    <div className={cx('courseShowInfo')}>
                                        <Description className={cx('courseShowIcon')} />
                                        <span className={cx('courseShowInfoTitle')}>M?? t???: {data.description}</span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.subject.name ? (
                                    <div className={cx('courseShowInfo')}>
                                        <Subject className={cx('courseShowIcon')} />
                                        <span className={cx('courseShowInfoTitle')}>M??n h???c: {data.subject.name}</span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.grade.name ? (
                                    <div className={cx('courseShowInfo')}>
                                        <School className={cx('courseShowIcon')} />
                                        <span className={cx('courseShowInfoTitle')}>
                                            ????? tu???i h???c vi??n: {data.grade.name}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.classRequirement.level ? (
                                    <div className={cx('courseShowInfo')}>
                                        <WorkspacePremiumOutlined className={cx('courseShowIcon')} />
                                        <span className={cx('courseShowInfoTitle')}>
                                            C???p b???c gi???ng vi??n: {handleLevel(data.classRequirement.level)}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.classRequirement.address && data.classRequirement.address.fullAddress ? (
                                    <div className={cx('courseShowInfo')}>
                                        <LocationOnOutlined className={cx('courseShowIcon')} />
                                        <span className={cx('courseShowInfoTitle')}>
                                            ?????a ch???: {data.classRequirement.address.fullAddress}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.classRequirement.amountStudent ? (
                                    <div className={cx('courseShowInfo')}>
                                        <PeopleAltOutlined className={cx('courseShowIcon')} />
                                        <span className={cx('courseShowInfoTitle')}>
                                            S?? s???: {data.classRequirement.amountStudent}
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
                                            Ng??y b???t ?????u: {handleDate(data.classRequirement.dateStart)}
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
                                            Ng??y b???t ?????u - k???t th??c: {handleDate(data.classRequirement.dateStart)} -{' '}
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
                                            S??? gi??? h???c: {Number(data.classRequirement.timeLesson) / 60 + ' ph??t/bu???i'}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {data.tuition ? (
                                    <div className={cx('courseShowInfo')}>
                                        <AttachMoney className={cx('courseShowIcon')} />
                                        <span className={cx('courseShowInfoTitle')}>
                                            Ti???n l????ng: {handleQuantity(data.tuition, '.', ' VN??')}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                <div className={cx('courseShowInfo')}>
                                    <CalendarToday className={cx('courseShowIcon')} />
                                    <span className={cx('courseShowInfoTitle')}>
                                        Ng??y t???o: {handleDateTime(new Date(data.createdAt))}
                                    </span>
                                </div>
                                {data.status ? (
                                    <div className={cx('courseShowInfo')}>
                                        <InfoOutlined className={cx('courseShowIcon')} />
                                        <span className={cx('courseShowInfoTitle')}>
                                            Tr???ng th??i: {handleStatusCourse(data.status)}
                                        </span>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className={cx('courseUpdate')}>
                            <span className={cx('courseShowTitle')}>Th??ng tin ng?????i t???o</span>
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
                                        Gi???i t??nh: {handleGender(data.createdBy.gender)}
                                    </span>
                                </div>
                            ) : (
                                <></>
                            )}
                            {data.createdBy.birthday ? (
                                <div className={cx('courseShowInfo')}>
                                    <CalendarToday className={cx('courseShowIcon')} />
                                    <span className={cx('courseShowInfoTitle')}>
                                        Ng??y sinh: {handleDate(data.createdBy.birthday)}
                                    </span>
                                </div>
                            ) : (
                                <></>
                            )}
                            {data.createdBy.phone ? (
                                <div className={cx('courseShowInfo')}>
                                    <PhoneAndroid className={cx('courseShowIcon')} />
                                    <span className={cx('courseShowInfoTitle')}>
                                        S??? ??i???n tho???i: {data.createdBy.phone}
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
                                        ?????a ch???: {data.createdBy.addresses[0].fullAddress}
                                    </span>
                                </div>
                            ) : (
                                <></>
                            )}
                            <span className={cx('courseShowTitle')}>Th??ng tin ng?????i nh???n</span>
                            {data.userApply ? (
                                <Link to={'/user/' + data.userApply.id} className={cx('userShowTop')}>
                                    <img src={data.userApply.urlAvt} alt="avatar" className={cx('userShowImg')} />
                                    <div className={cx('userShowTopTitle')}>
                                        <span className={cx('userShowUserName')}>{data.userApply.name}</span>
                                        <span className={cx('userShowUserTitle')}>{data.userApply.username}</span>
                                    </div>
                                </Link>
                            ) : (
                                <div className={cx('courseShowInfo')}>Ch??a c?? ng?????i nh???n.</div>
                            )}
                            {data.userApply?.gender ? (
                                <div className={cx('courseShowInfo')}>
                                    <MaleOutlined className={cx('courseShowIcon')} />
                                    <span className={cx('courseShowInfoTitle')}>
                                        Gi???i t??nh: {handleGender(data.userApply.gender)}
                                    </span>
                                </div>
                            ) : (
                                <></>
                            )}
                            {data.userApply?.birthday ? (
                                <div className={cx('courseShowInfo')}>
                                    <CalendarToday className={cx('courseShowIcon')} />
                                    <span className={cx('courseShowInfoTitle')}>
                                        Ng??y sinh: {handleDate(data.userApply.birthday)}
                                    </span>
                                </div>
                            ) : (
                                <></>
                            )}
                            {data.userApply?.phone ? (
                                <div className={cx('courseShowInfo')}>
                                    <PhoneAndroid className={cx('courseShowIcon')} />
                                    <span className={cx('courseShowInfoTitle')}>
                                        S??? ??i???n tho???i: {data.userApply.phone}
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
                                        ?????a ch???: {data.userApply.addresses[0].fullAddress}
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
