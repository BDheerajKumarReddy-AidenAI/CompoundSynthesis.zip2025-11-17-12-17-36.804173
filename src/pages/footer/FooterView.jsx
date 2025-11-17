import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';

const FooterView = () => {
    return (
        <Toolbar className="footerview" sx={{ minHeight: 60 }}>
            <Box className="footerviewtext">
                <Typography variant="body2" align="center">
                    © 2025 AidenAI. All Rights Reserved.
                </Typography>
            </Box>
        </Toolbar>
    );
};

export default FooterView;