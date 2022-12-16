import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataConnected, mockDataPacket } from "../../data/mockData";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* Page Title and subtilte */}
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        {/* Download Reports Button */}
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: colors.blueAccent[400],
              }
            }}
          >
            {/* Open directories where file captures are stored here */}
            <FolderOpenIcon sx={{ mr: "10px" }} />
            File Captures
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="130px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          {/* Pie Chart */}
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Data Usage
          </Typography>
          <Box height="400px">
            <PieChart isDashboard={true} />
          </Box>
        </Box>
        
        {/* Connected Devices List */}
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${theme.palette.mode === "dark" ? colors.primary[500] : colors.primary[800]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Connected Devices
            </Typography>
          </Box>
          {/* Populate the list */}
          {mockDataConnected.map((connected, i) => (
            <Box
              key={`${connected.mac}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${theme.palette.mode === "dark" ? colors.primary[500] : colors.primary[800]}`}
              p="15px"
            >
              {/* Device MAC ADDRESS OR NAME */}
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {connected.mac} 
                </Typography>

                {/* Device local IP */}
                <Typography color={colors.grey[100]}>
                  
                  {connected.addr}
                </Typography>
              </Box>

              {/* Device signal level */}
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {connected.rssi}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${theme.palette.mode === "dark" ? colors.primary[500] : colors.primary[800]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Packet Captures
            </Typography>
          </Box>
          {/* Populate the list */}
          {mockDataPacket.map((packet, i) => (
            <Box
              key={`${packet.name}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${theme.palette.mode === "dark" ? colors.primary[500] : colors.primary[800]}`}
              p="15px"
            >
              <Box>
                {/* File Name and time it was created */}
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {packet.name}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {packet.time}
                </Typography>
              </Box>
              {/* Date created and file size */}
              <Box color={colors.grey[100]}>{packet.date}</Box>
              <Box color={colors.grey[100]}>{packet.size}</Box>
              
              {/* Packet number count */}
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {packet.count}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;