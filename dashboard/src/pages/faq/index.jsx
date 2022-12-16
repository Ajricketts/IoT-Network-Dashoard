import { Box, useTheme, Typography, Accordion } from "@mui/material"
import Header from "../../components/Header"
import Accordian from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme"

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {/* QUESTION */}
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Some devices that are being monitored are not IoT devices, how can I ensure only IoT devices are monitored?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {/* ANSWER */}
                        If there are devices that are being monitored that you have identified to not be IoT devices, you can simply
                        use the Monitor List page and select the device(s) you want to remove and select the remove button.
                    </Typography>
                </AccordionDetails>
            </Accordion> 

            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        How can I change how frequently the monitor gathers information from the network?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To change how frequently the monitor gathers information from your network, visit the settings page
                        and adjust the refresh settings to one of the time intervals.
                    </Typography>
                </AccordionDetails>
            </Accordion> 

            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        How do I change where packet captures are stored?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To change where packet captures are stored, visit the settings page and paste the full directory path
                        of the new storage location in the "Change Packet Storage Location" input box, and press save.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What are Local IP Addresses?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Local (or Internal) IP Addresses are how your router identifies different devices on your network,
                        your external IP is assigned to your router by your internet service provider. 
                    </Typography>
                </AccordionDetails>
            </Accordion> 

            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Can I monitor data being sent more frequently than the pre determined intervals?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Not yet but that feature is coming soon!
                    </Typography>
                </AccordionDetails>
            </Accordion> 
        </Box>
    )
}

export default FAQ