import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';
import DataGrid from '~/components/DataGrid';
import className from 'classnames/bind';
import styles from './CourseList.module.scss';

const cx = className.bind(styles);

const courseRows = [
    {
        id: 1,
        title: 'Tuyển gia sư dạy Vẽ',
        description: 'Học viên nam 10 tuổi',
        tuition: '5000000 VNĐ',
        status: 'CREATE',
    },
    {
        id: 2,
        title: 'Tuyển gia sư dạy Lý',
        description: 'Học viên lớp 7',
        tuition: '2500000 VNĐ',
        status: 'CREATE',
    },
    {
        id: 3,
        title: 'Tuyển gia sư dạy Toán',
        description: 'Học viên lớp 10 đến 12',
        tuition: '4000000 VNĐ',
        status: 'CREATE',
    },
    {
        id: 4,
        title: 'Tuyển gia sư dạy thanh nhạc',
        description: 'Học viên nữ 12 tuổi',
        tuition: '10000000 VNĐ',
        status: 'CREATE',
    },
];

function CourseList() {
    const [data, setData] = useState(courseRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

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
                        <Link to={'/course/' + params.row.id}>
                            <button className={cx('dataGridEditBtn')}>Edit</button>
                        </Link>
                        <DeleteOutline
                            className={cx('dataGridDeleteBtn')}
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className={cx('courseList')}>
            <DataGrid rows={data} columns={columns} pageSize={8} disableSelectionOnClick checkboxSelection />
        </div>
    );
}

export default CourseList;
