import className from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import LoadingOverlay from 'react-loading-overlay-ts';
import DataGrid from '~/components/DataGrid';
import * as services from '~/services/services';
import { handleDate } from '~/utils/commonFunc';
import styles from './UserList.module.scss';

const cx = className.bind(styles);

export default memo(function UserList() {
    const location = useLocation();
    const { userList } = location.state;

    const [data, setData] = useState([]);

    const fetchApi = async (page) => {
        const res = await services.getUserList(page);
        console.log(res.data);
        setData((prev) => [...prev, ...res.data]);
    };

    useEffect(() => {
        console.log(userList);
        if (userList !== null && userList.length > 0) setData(userList);
        else fetchApi();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.5, headerAlign: 'center', align: 'center' },
        {
            field: 'user',
            headerName: 'Người dùng',
            flex: 2,
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div className={cx('userListUser')}>
                        <img className={cx('userListImg')} src={params.row.urlAvt} alt="avatar" />
                        {params.row.username || 'user03' + params.row.id}
                    </div>
                );
            },
        },
        {
            field: 'name',
            headerName: 'Họ tên',
            headerAlign: 'center',
            flex: 2,
        },
        { field: 'email', headerName: 'Email', flex: 2, headerAlign: 'center' },
        {
            field: 'createdAt',
            headerName: 'Ngày tạo',
            flex: 2,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                return <>{handleDate(params.row.createdAt)}</>;
            },
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
                        <Link to={'/user/' + params.row.id}>
                            <button className={cx('dataGridEditBtn')}>View</button>
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
            className={cx('userList')}
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
            <DataGrid rows={data} disableSelectionOnClick columns={columns} />
        </LoadingOverlay>
    );
});
