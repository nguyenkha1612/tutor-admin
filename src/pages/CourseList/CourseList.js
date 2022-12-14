import className from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import { Link } from 'react-router-dom';
import DataGrid from '~/components/DataGrid';
import { handleQuantity } from '~/utils/commonFunc';
import styles from './CourseList.module.scss';

const cx = className.bind(styles);

function CourseList({ courseListData = [] }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (courseListData.length > 0) setData(courseListData);
    }, [courseListData]);

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
                        <Link to={'/course/' + params.row.id}>
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
