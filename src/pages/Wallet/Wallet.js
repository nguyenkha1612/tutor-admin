import className from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import DataGrid from '~/components/DataGrid';

import * as services from '~/services/services';
import { handleDateTime, handleQuantity } from '~/utils/commonFunc';
import styles from './Wallet.module.scss';

const cx = className.bind(styles);

function Wallet() {
    const [data, setData] = useState([]);

    const fetchApi = async () => {
        const res = await services.getBalanceList();
        console.log(res.data);
        setData(res.data);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    function rowKeyGetter(row) {
        console.log(row);
        return row.user.id;
    }

    function generateRandom() {
        var length = 8,
            charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            retVal = '';
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 0.35,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                return <>{params.row.user.id}</>;
            },
        },
        {
            field: 'customer',
            headerName: 'Khách hàng',
            flex: 1.5,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div className={cx('userListUser')}>
                        <img className={cx('userListImg')} src={params.row.user.urlAvt} alt="avatar" />
                        {params.row.user.name}
                    </div>
                );
            },
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                return <>{params.row.user.email}</>;
            },
        },
        {
            field: 'balance',
            headerName: 'Số dư',
            flex: 1.25,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                return <>{handleQuantity(params.row.balance, '.', ' COIN')}</>;
            },
        },
        {
            field: 'updatedAt',
            headerName: 'Lần cập nhật cuối',
            flex: 1.5,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                return <>{handleDateTime(new Date(params.row.updatedAt))}</>;
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
            {data.length > 0 ? (
                <DataGrid
                    rows={data}
                    columns={columns}
                    rowKeyGetter={rowKeyGetter}
                    getRowId={(row) => generateRandom()}
                    disableSelectionOnClicks
                />
            ) : (
                <></>
            )}
        </LoadingOverlay>
    );
}

export default memo(Wallet);
