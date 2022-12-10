import className from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import { Link, useLocation } from 'react-router-dom';
import DataGrid from '~/components/DataGrid';
import * as services from '~/services/services';
import { handleQuantity } from '~/utils/commonFunc';
import styles from './CourseList.module.scss';
const cx = className.bind(styles);

function CourseList() {
    const location = useLocation();
    const { courseList } = location.state;
    // const currentPage = useRef(1);

    const [data, setData] = useState([]);

    const fetchApi = async (page) => {
        const res = await services.getCourseList(page);
        setData((prev) => [...prev, ...res.data.data]);
    };

    useEffect(() => {
        console.log(courseList);
        if (courseList.length > 0) setData(courseList);
        else fetchApi();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.35, headerAlign: 'center', align: 'center' },
        {
            field: 'title',
            headerName: 'Tiêu đề',
            flex: 2.5,
            headerAlign: 'center',
        },
        { field: 'description', headerName: 'Mô tả', flex: 2.5, headerAlign: 'center' },
        {
            field: 'tuition',
            headerName: 'Học phí',
            flex: 1,
            headerAlign: 'center',

            renderCell: (params) => {
                return <>{handleQuantity(params.row.tuition, '.', ' VNĐ')}</>;
            },
        },
        {
            field: 'status',
            headerName: 'Trạng thái',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'action',
            headerName: 'Chỉnh sửa',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/course/' + params.row.id} state={{ data: params.row }}>
                            <button className={cx('dataGridEditBtn')}>View</button>
                        </Link>
                    </>
                );
            },
        },
    ];

    // const onPageChange = (e) => {
    //     if (!(e < currentPage.current)) {
    //         currentPage.current = e + 1;
    //         fetchApi(currentPage.current);
    //     }
    // };

    return (
        <LoadingOverlay
            active={data.length === 0}
            spinner
            text="Loading..."
            className={cx('courseList')}
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
            <DataGrid
                rows={data}
                columns={columns}
                disableSelectionOnClick
                // onPageChange={(e) => onPageChange(e)}
            />
        </LoadingOverlay>
    );
}

export default memo(CourseList);
