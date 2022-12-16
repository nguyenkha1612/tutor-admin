import className from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import { Link } from 'react-router-dom';
import DataGrid from '~/components/DataGrid';

import * as services from '~/services/services';
import { handleDateTime, handleQuantity } from '~/utils/commonFunc';
import styles from './TransactionList.module.scss';

const cx = className.bind(styles);

function TransactionList() {
    const currentPage = useRef(1);
    const [data, setData] = useState([]);

    const fetchApi = async (page) => {
        const res = await services.getTransactionList(page);
        setData((prev) => [...prev, ...res.data]);
    };

    // useEffect(() => {
    //     if (transactionListData.length > 0) {
    //         setData(transactionListData);
    //         setLoading(false);
    //     }
    // }, [transactionListData]);

    useEffect(() => {
        fetchApi();
    }, []);

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 0.35,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'customer',
            headerName: 'Khách hàng',
            flex: 2,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div className={cx('userListUser')}>
                        <img className={cx('userListImg')} src={params.row.user.urlAvt} alt="avatar" />
                        {params.row.user.email}
                    </div>
                );
            },
        },
        {
            field: 'amount',
            headerName: 'Số tiền',
            flex: 1,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                return <>{handleQuantity(params.row.amount, '.', ' ' + params.row.currencyCode)}</>;
            },
        },
        {
            field: 'createdAt',
            headerName: 'Thời gian giao dịch',
            flex: 1.5,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                return <>{handleDateTime(new Date(params.row.createdAt))}</>;
            },
        },
        {
            field: 'paymentMethod',
            headerName: 'Phương thức thanh toán',
            flex: 1.2,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                return <>{params.row.method}</>;
            },
        },
        {
            field: 'action',
            headerName: 'Chỉnh sửa',
            flex: 1,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/transaction/' + params.row.id} state={{ data: params.row }}>
                            <button className={cx('dataGridEditBtn')}>View</button>
                        </Link>
                    </>
                );
            },
        },
    ];

    const onPageChange = (e) => {
        if (!(e < currentPage.current)) {
            currentPage.current = e + 1;
            fetchApi(currentPage.current);
        }
    };

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
            {data.length > 0 ? (
                <DataGrid rows={data} columns={columns} disableSelectionOnClick onPageChange={(e) => onPageChange(e)} />
            ) : (
                <></>
            )}
        </LoadingOverlay>
    );
}

export default memo(TransactionList);
