import { DataGrid as DataGridTemplate } from '@mui/x-data-grid';
import { memo } from 'react';

function DataGrid({ rows, columns, pageSize = 12, disableSelectionOnClick = false, checkboxSelection = false }) {
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

export default memo(DataGrid);
