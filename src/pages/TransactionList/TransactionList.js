import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';
import DataGrid from '~/components/DataGrid';
import className from 'classnames/bind';

import styles from './TransactionList.module.scss';

const cx = className.bind(styles);

const courseRows = [
    {
        id: 1,
        total: '50.000 VNĐ',
        createDate: '2022-11-19 15:42:14',
        paymentMethod: {
            id: 1,
            name: 'Paypal',
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
    },
    {
        id: 2,
        total: '500.000 VNĐ',
        createDate: '2022-11-19 15:42:14',
        paymentMethod: {
            id: 1,
            name: 'Paypal',
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
    },
    {
        id: 3,
        total: '24.000 VNĐ',
        createDate: '2022-11-19 15:42:14',
        paymentMethod: {
            id: 1,
            name: 'Paypal',
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
    },
];

function TransactionList() {
    const [data, setData] = useState(courseRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.5 },
        {
            field: 'customer',
            headerName: 'Khách hàng',
            flex: 1.5,
            renderCell: (params) => {
                return (
                    <div className={cx('userListUser')}>
                        <img className={cx('userListImg')} src={params.row.user.avatar} alt="" />
                        {params.row.user.userName}
                    </div>
                );
            },
        },
        { field: 'total', headerName: 'Số tiền', flex: 2 },
        {
            field: 'createDate',
            headerName: 'Thời gian giao dịch',
            flex: 1.5,
        },
        {
            field: 'paymentMethod',
            headerName: 'Phương thức thanh toán',
            flex: 1,
            renderCell: (params) => {
                return <>{params.row.paymentMethod.name}</>;
            },
        },
        {
            field: 'action',
            headerName: 'Chỉnh sửa',
            flex: 1,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/transaction/' + params.row.id}>
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
        <div className={cx('transactionList')}>
            <DataGrid rows={data} columns={columns} pageSize={8} disableSelectionOnClick checkboxSelection />
        </div>
    );
}

export default TransactionList;
