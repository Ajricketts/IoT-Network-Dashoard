import {useState } from "react"
// import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"
import { ProSidebarProvider, sidebarClasses } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme} from "@mui/material"
import { Link } from "react-router-dom"
import { tokens } from "../../theme"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined"
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import iotIconLight from "../../assets/IoT-Icon-white.png"
import iotIconDark from "../../assets/IoT-Icon-black.png"


const Item = ({ title, to, icon, setActive }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <MenuItem
            onclick={() => setActive = true}
            active={setActive}
            icon={icon}
            routerLink={<Link to={to} />}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    )
}


// TODO FIGURE OUT WHY BUTTON STATE ISNT WORKING
const SidebarNew = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
        <div style={{ display: 'flex', height: '100%'}}>
        <Sidebar 
        rootStyles={{[`.${sidebarClasses.container}`]: {
            backgroundColor: colors.primary[400],
            background: colors.primary[400]
          },
        }}>
          <Menu
            menuItemStyles={{
                button: ({ level, active }) => {
                  // only apply styles on first level elements of the tree
                  if (level === 0)
                    return {
                      color: active ? '#6870fa' : colors.grey[100],
                      backgroundColor: active ? 'transparent' : undefined,
                      "&:hover": {
                        backgroundColor: 'transparent',
                        color: "#868dfb",
                      },
                    //   "&:active": {
                    //     color: "#6870fa"
                    //   }
                    };
                },
              }}
          >
            {/* Hamburger Menu Button */}
            <MenuItem
                onClick={() => collapseSidebar()}
                icon={collapsed ? <MenuOutlinedIcon /> : <MenuOutlinedIcon />}
                style={{
                    margin: "10px 0 20px 0",
                }}
            >
            </MenuItem>
           
           {/* DASHBOARD ICON AND TITLES */}
           {!collapsed && (
            <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                    <img 
                        alt="profile-user"
                        width="150px"
                        height="150px"
                        src={theme.palette.mode === "dark" ? iotIconLight : iotIconDark }
                        style={{cursor: "pointer"}}
                    />
                </Box>

                <Box textAlign="center">
                    <Typography 
                        variant="h3" 
                        color={colors.grey[100]} 
                        fontWeight="bold" 
                        sx={{ m: "10px 0 0 0"}}
                    >  
                        Internet of Things
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>Network Monitor</Typography>
                </Box>
            </Box>
           )}

            {/* MENU ITEMS */}
            <Box
                paddingLeft={collapsed ? undefined : "10%"}
            >
                <Item 
                    title="Dashboard"
                    to="/"
                    icon={<HomeOutlinedIcon />}
                    setActive={false}
                />
                {/* SideBar label */}
                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                >
                    Pages
                </Typography>

                <Item 
                    title="Connected Devices"
                    to="/connected"
                    icon={<PeopleOutlinedIcon />}
                    setActive={false}
                />
                <Item 
                    title="Packet Captures"
                    to="/packet"
                    icon={<ContactsOutlinedIcon />}
                    setActive={false}
                />
                <Item 
                    title="Monitor List"
                    to="/monitor"
                    icon={<ReceiptOutlinedIcon />}
                    setActive={false}
                />
                <Item 
                    title="Statistics"
                    to="/pie"
                    icon={<PieChartOutlineOutlinedIcon />}
                    setActive={false}
                />

                {/* SideBar label */}
                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px"}}
                >
                    Settings
                </Typography>

                <Item 
                    title="FAQ Page"
                    to="/faq"
                    icon={<HelpOutlinedIcon />}
                    setActive={false}
                />

                <Item 
                    title="Settings"
                    to="/settings"
                    icon={<SettingsOutlinedIcon />}
                    setActive={false}
                />
            </Box>

          </Menu>
        </Sidebar>
      </div>

    )
}

export default SidebarNew