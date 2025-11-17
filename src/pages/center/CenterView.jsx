import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const CenterView = () => {
    return (
        <Box className="centerview" display="flex" flexDirection="column">
            {/* Card content goes here */}
        </Box>
    );
};

CenterView.propTypes = {
    // Define PropTypes here if there are props
};

export default CenterView;