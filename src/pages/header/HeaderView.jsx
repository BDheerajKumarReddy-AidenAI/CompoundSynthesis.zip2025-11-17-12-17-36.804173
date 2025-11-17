import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Box, Typography, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const HeaderView = ({ heading, onProfileClick, onNotificationsClick, onSettingsClick }) => {
    return (
        <AppBar position="static" sx={{ minHeight: 60, padding: '16px 24px' }} className="headerview">
            <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <Typography
                        variant="h6"
                        className="headerviewtext"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            pl: '10px',
                            fontFamily: '\'Poppins\', sans-serif',
                            color: '#ffffff',
                        }}
                    >
                        {heading}
                    </Typography>
                </Box>
                <Box className="headerview-icons" sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        onClick={() => console.log('Home clicked')} 
                        title="Home"
                        className="headerbutton"
                    >
                        <HomeIcon />
                    </IconButton>
                    <IconButton
                        onClick={onProfileClick}
                        title="Profile"
                        className="headerbutton"
                    >
                        <PersonIcon />
                    </IconButton>
                    <IconButton
                        onClick={onNotificationsClick}
                        title="Notifications"
                        className="headerbutton"
                    >
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton
                        onClick={onSettingsClick}
                        title="Settings"
                        className="headerbutton"
                    >
                        <SettingsIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

HeaderView.propTypes = {
    heading: PropTypes.string.isRequired,
    onProfileClick: PropTypes.func.isRequired,
    onNotificationsClick: PropTypes.func.isRequired,
    onSettingsClick: PropTypes.func.isRequired,
};

HeaderView.defaultProps = {
    heading: 'Default Heading',
};

export default HeaderView;