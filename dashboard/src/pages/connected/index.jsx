import { Box, useTheme } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { tokens } from "../../theme"
import { mockDataConnected } from "../../data/mockData"
import Header from "../../components/Header"

const Connected = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    // Tell DataGrid what to look for to populate the list
    const columns = [
        {field: "id", headerName: "Device ID"},
        {
            field: "mac", 
            headerName: "MAC Addr / Device Name", 
            flex: 1, 
            cellClassName: "name-column--cell"
        },
        {
            field: "rssi",
            headerName: "Signal Strength (RSSI Level)",
            flex: 1,
        },
        {
            field: "addr",
            headerName: "Local IP Address",
            flex: 1
        },
    ]

    return (
        <Box m="20px">
            <Header title="CONNECTED DEVICES" subtitle="A List of All Connected Devices on your Network" />
            <Box 
                m="40px 0 0 0"
                height="75vh"
                // List Styles
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                        color: "#e0e0e0",
                    },

                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                        color: colors.grey[100]
                    },

                    "& .name-column--cell": {
                        color: colors.greenAccent[500]
                    },

                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[900],
                        borderBottom: "none"
                    },

                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[700],
                        borderBottom: "none"
                    },

                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: colors.blueAccent[900],
                        borderBottom: "none"
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiTablePagination-root": {
                        color: "#e0e0e0",
                    },
                }}
            >
                <DataGrid
                    rows={ mockDataConnected } //REAL DATA HERE TO POPULATE LIST
                    columns={ columns }
                />
            </Box>
        </Box>
    )
}

export default Connected