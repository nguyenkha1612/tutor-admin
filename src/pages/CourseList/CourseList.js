import { memo, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DataGrid from '~/components/DataGrid';
import className from 'classnames/bind';
import styles from './CourseList.module.scss';
import * as services from '~/services/services';
import LoadingOverlay from 'react-loading-overlay-ts';
const cx = className.bind(styles);

function CourseList() {
    const location = useLocation();
    const { courseList } = location.state;

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const coursesResponse = await services.getCourseList();
            setData(coursesResponse.data.data);
        };

        if (courseList) setData(courseList);
        else fetchApi();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.5 },
        {
            field: 'title',
            headerName: 'Tiêu đề',
            flex: 2.5,
        },
        { field: 'description', headerName: 'Mô tả', flex: 2.5 },
        {
            field: 'tuition',
            headerName: 'Học phí',
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Trạng thái',
            flex: 1,
        },
        {
            field: 'action',
            headerName: 'Chỉnh sửa',
            flex: 1,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/course/' + params.row.id} state={{ data: params.row }}>
                            <button className={cx('dataGridEditBtn')}>Edit</button>
                        </Link>
                    </>
                );
            },
        },
    ];

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
            <DataGrid rows={data} columns={columns} disableSelectionOnClick checkboxSelection />
        </LoadingOverlay>
    );
}

export default memo(CourseList);
