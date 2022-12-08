import className from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DataGrid from '~/components/DataGrid';
import LoadingOverlay from 'react-loading-overlay-ts';

import * as services from '~/services/services';
import { handleDateTime, handleQuantity } from '~/utils/commonFunc';
import styles from './TransactionList.module.scss';

const cx = className.bind(styles);

function TransactionList() {
    const location = useLocation();
    const { transactionList } = location.state;

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await services.getTransactionList();
            const transactionList = res.data;
            for (let i = 0; i < transactionList.length; i++) {
                let userInfo = await services.getUserById(transactionList[i].userId);
                if (userInfo != null)
                    transactionList[i] = {
                        ...transactionList[i],
                        userInfo: userInfo.data,
                    };
            }
            setData(transactionList);
        };

        if (transactionList.length > 0) setData(transactionList);
        else fetchApi();
        console.log(transactionList);
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.5 },
        {
            field: 'customer',
            headerName: 'Khách hàng',
            flex: 2,
            renderCell: (params) => {
                return (
                    <div className={cx('userListUser')}>
                        <img className={cx('userListImg')} src={params.row.userInfo.urlAvt} alt="avatar" />
                        {params.row.userInfo.email}
                    </div>
                );
            },
        },
        {
            field: 'amount',
            headerName: 'Số tiền',
            flex: 1.5,
            renderCell: (params) => {
                return <>{handleQuantity(params.row.amount, '.', ' ' + params.row.currencyCode)}</>;
            },
        },
        {
            field: 'createdAt',
            headerName: 'Thời gian giao dịch',
            flex: 1.5,
            renderCell: (params) => {
                return <>{handleDateTime(new Date(params.row.createdAt))}</>;
            },
        },
        {
            field: 'paymentMethod',
            headerName: 'Phương thức thanh toán',
            flex: 1,
            renderCell: (params) => {
                return <>{params.row.method}</>;
            },
        },
        {
            field: 'action',
            headerName: 'Chỉnh sửa',
            flex: 1,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/transaction/' + params.row.id} state={{ data: params.row }}>
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
            className={cx('transactionList')}
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

export default memo(TransactionList);
