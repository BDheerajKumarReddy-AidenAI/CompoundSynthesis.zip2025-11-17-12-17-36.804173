import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const TopView = () => {
    const [navCollapsed, setNavCollapsed] = useState(false);
    const logoSrc = navCollapsed ? "resources/images/AidenAI_Short.svg" : "resources/images/AidenAI_Logo.svg";

    const handleToggleNav = () => {
        setNavCollapsed(prev => !prev);
    };

    return (
        <AppBar position="static" sx={{ height: 80, padding: '10px 20px', display: 'flex', flexDirection: navCollapsed ? 'column' : 'row' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, margin: '0 5px' }}>
                <img src={logoSrc} className="topview-logo" alt="Logo" style={{ height: 40, width: 170 }} />
            </Box>
            <Button
                className="nav-toggle-btn"
                variant="contained"
                onClick={handleToggleNav}
                startIcon={<MenuIcon />}
                title="Toggle Navigation"
            >
                Toggle Navigation
            </Button>
        </AppBar>
    );
};

export default TopView;