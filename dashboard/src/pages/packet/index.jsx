import { Box } from "@mui/material"
import { DataGrid, GridToolbar} from "@mui/x-data-grid"
import { tokens } from "../../theme"
import { mockDataPacket } from "../../data/mockData"

import Header from "../../components/Header"
import { useTheme } from "@mui/material"

const Packet = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    // Tell DataGrid what to look for to populate the list
    const columns = [
        {field: "id", headerName: "Capture #", flex: 0.5},
        {
            field: "name", 
            headerName: "File Name", 
            flex: 1, 
            cellClassName: "name-column--cell"
        },
        {
            field: "date",
            headerName: "Capture Date",
            flex: 1,
        },
        {
            field: "time",
            headerName: "Capture Time",
            flex: 1,
        },
        {
            field: "size",
            headerName: "File Size",
            flex: 1
        },
        {
            field: "count",
            headerName: "Packet Count",
            flex: 1
        },
    ]

    return (
        <Box m="20px">
            <Header title="PACKET CAPTURES" subtitle="History of Previous Packet Captures" />
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
                    "& .MuiButtonBase-root": {
                        color: theme.palette.mode === "dark" ? "#e0e0e0" : "#141b2d",
                    },
                }}
            >
                <DataGrid
                    rows={ mockDataPacket } //REAL DATA HERE TO POPULATE LIST
                    columns={ columns }
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )
}

export default Packet