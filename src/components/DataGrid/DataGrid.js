import { alpha, styled } from '@mui/material/styles';
import { DataGrid as DataGridComponent, gridClasses } from '@mui/x-data-grid';
import { memo } from 'react';

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGridComponent)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
        backgroundColor: theme.palette.grey[200],
        '&:hover, &.Mui-hovered': {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
        '&.Mui-selected': {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY + theme.palette.action.selectedOpacity),
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    ODD_OPACITY + theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity,
                ),
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        ODD_OPACITY + theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    },
}));

function DataGrid({
    rows,
    columns,
    pageSize = 15,
    disableSelectionOnClick = false,
    checkboxSelection = false,
    onPageChange,
    getRowId,
}) {
    return (
        <StripedDataGrid
            rows={rows}
            disableSelectionOnClick={disableSelectionOnClick}
            columns={columns}
            pageSize={pageSize}
            checkboxSelection={checkboxSelection}
            getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
            sx={{
                '& .css-levciy-MuiTablePagination-displayedRows': {
                    fontSize: '18px',
                    marginBottom: 0,
                },
                '& .css-i4bv87-MuiSvgIcon-root': {
                    width: '20px',
                    height: '20px',
                    fontSize: '20px',
                },
            }}
            onPageChange={onPageChange}
            getRowId={getRowId}
        />
    );
}

export default memo(DataGrid);
