import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import NavView from './NavView';
import HeaderView from './HeaderView';
import FooterView from './FooterView';
import CenterView from './CenterView';

const MainView = () => {
    const [navviewWidth, setNavviewWidth] = React.useState(250); // default width
    const [headerviewHeight, setHeaderviewHeight] = React.useState(64); // default height
    const [footerviewHeight, setFooterviewHeight] = React.useState(64); // default height

    const handleMenuViewSelectionChange = (selectedItem) => {
        // Implement your selection change logic here
    };

    return (
        <Box display="flex" flexDirection="column" height="100vh">
            <Box sx={{ height: headerviewHeight }}>
                <HeaderView />
            </Box>
            <Box display="flex" flexDirection="row" flexGrow={1}>
                <Box sx={{ width: navviewWidth }}>
                    <NavView onSelect={handleMenuViewSelectionChange} />
                </Box>
                <Box flexGrow={1}>
                    <CenterView />
                </Box>
            </Box>
            <Box sx={{ height: footerviewHeight }}>
                <FooterView />
            </Box>
        </Box>
    );
};

MainView.propTypes = {
    navviewWidth: PropTypes.number,
    headerviewHeight: PropTypes.number,
    footerviewHeight: PropTypes.number
};

export default MainView;