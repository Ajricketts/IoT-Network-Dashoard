import { Box, Typography, styled, useTheme, IconButton } from "@mui/material"
import InputBase from "@mui/material/InputBase";
import {useState } from "react"
import { ColorModeContext, tokens } from "../../theme";
import Slider from '@mui/material/Slider';
import Header from "../../components/Header"
import SaveIcon from '@mui/icons-material/Save';
import { refreshMarks, packetMarks } from "../../data/mockData";

const Widget = styled('div')(({ theme }) => ({
    padding: 20,
    borderRadius: 10,
    maxWidth: '100%',
    margin: '0 auto 30px 0',
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#1f2a40' : '#f2f0f0',
  }));

const VariableSlider = ({min, max, labels}) => {
    const theme = useTheme()
    return (
        <Slider
            aria-label="Always visible"
            defaultValue={1}
            marks={labels}
            min={min}
            max={max}
            valueLabelDisplay="auto"
            sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                height: 5,
                '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                    boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark'
                        ? 'rgb(255 255 255 / 16%)'
                        : 'rgb(0 0 0 / 16%)'
                    }`,
                },
                '&.Mui-active': {
                    width: 20,
                    height: 20,
                },
                },
                '& .MuiSlider-rail': {
                opacity: 0.28,
                },
            }}
        />
    )
}

const Settings = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
            <Box m="20px">
                <Header title="Settings" subtitle="Make Changes to the Monitor" />
                <Box display="flex" width="100%">
                    <Box width="56%">
                        {/* Update how often the network is scanned here
                        dummy intervals for now (1-4 times a day), but would most likely want to
                        scan/monitor the network more often, original idea was once an hour, could be more frequent */}
                        <Widget>
                            <Typography variant="h4" fontWeight="400" mb="5px">Refresh Interval (Times Per Day)</Typography>
                            <VariableSlider min={1} max={4} labels={refreshMarks} />
                        </Widget>

                        {/* Update how long packets are gathered here, again, dummy intervals for now
                        but original idea was 10 minutes, could shorter if that amount of data would suffice */}
                        <Widget>
                            <Typography variant="h4" fontWeight="400" mb="5px">Packet Capture Length (In Minutes)</Typography>
                            {/* Labels array is in mockData, change this to change visible labels */}
                            <VariableSlider min={1} max={15} labels={packetMarks} /> 
                        </Widget>

                        {/* If this will be implemented, pull the path name from here and 
                        update where the packet files are stored */}
                        <Widget>
                            <Typography variant="h4" fontWeight="400" mb="5px">Change Packet Storage Location</Typography>
                            <Box
                                display="flex"
                                backgroundColor={theme.palette.mode === "dark" ? colors.primary[700] : colors.primary[900]}
                                borderRadius="3px"
                            >
                                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Enter the full path of the directory you would like
                                to store the packet captures" />
                                <IconButton type="button" sx={{ p: 1 }}>
                                    {/* When this icon is clicked (or enter is pressed) save the text in the input field */}
                                    <SaveIcon /> 
                                </IconButton>
                            </Box>
                        </Widget>
                    
                        {/* Help and Support Section */}
                        <Widget>
                            <Typography variant="h4" fontWeight="600" mb="5px">Help and Support</Typography>
                            <Typography variant="h6" fontWeight="400" mb="10px">
                                For Help and support, please see ENTER GITHUB REPO HERE for more documentation
                                and support
                            </Typography>
                            <Typography variant="h6" fontWeight="400" mb="100px">
                                If you require further assistance, reach out at https://www.linkedin.com/in/aj-ricketts/ 
                                or at ajricketts@cmail.carleton.ca
                            </Typography>
                        </Widget>
                    </Box>

                    <Box height="75vh" ml="20px" width="54%">
                        <Widget>
                            {/* About section, change this to info on why using the monitor is important / the motivation 
                            behind its development */}
                            <Typography align="center" variant="h3" fontWeight="600">About</Typography>
                            <Typography padding="10px" variant="h5" mb="75px" align="justify">
                            Given the rise in Internet of Things (IoT) devices in recent years, the number of ways a network 
                            can become compromised has increased considerably due to the less secure nature of these devices. 
                            This project proposes an Internet of Things network dashboard that aims to address some of the concerns 
                            consumers have with how their data is being handled by these devices and wish to gain more insight on the 
                            security of their home network. This project is broken up into three main parts, the automatic detection of IoT 
                            devices on a network, the analysis of network data, and a front facing dashboard for users to easily view 
                            information about the network in an easily understandable, digestible format. Although automatically detecting 
                            IoT devices on the network proves to be a challenging and complex task, this report investigates various 
                            approaches as to how to achieve this task. In addition, the design and implementation of the dashboard UI 
                            is also explored.
                            </Typography>
                        </Widget>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Settings
