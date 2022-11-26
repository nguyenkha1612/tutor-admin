import { DataGrid as DataGridTemplate } from '@mui/x-data-grid';
import className from 'classnames/bind';

import styles from './DataGrid.module.scss';

// eslint-disable-next-line no-unused-vars
const cx = className.bind(styles);

function DataGrid({ rows, columns, pageSize = 8, disableSelectionOnClick = false, checkboxSelection = false }) {
    return (
        <DataGridTemplate
            rows={rows}
            disableSelectionOnClick={disableSelectionOnClick}
            columns={columns}
            pageSize={pageSize}
            checkboxSelection={checkboxSelection}
        />
    );
}

export default DataGrid;
