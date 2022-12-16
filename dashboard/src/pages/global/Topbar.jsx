import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material"
import { ColorModeContext, tokens } from '../../theme'
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"


const Topbar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
  
    return (<Box display="flex" justifyContent="space-between" p={2}>

        {/* ICONS */}
        <Box display="flex" style={{marginLeft: "auto" }}>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
                
            </IconButton>

            <IconButton component={Link}to='/settings'>
                <SettingsOutlinedIcon />
            </IconButton>

            <IconButton>
                <PersonOutlinedIcon />
            </IconButton>
        </Box>
    </Box>
  )
}

export default Topbar