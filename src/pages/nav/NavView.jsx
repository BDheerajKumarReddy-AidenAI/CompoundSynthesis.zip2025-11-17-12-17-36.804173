import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import TopView from './TopView';
import MenuView from './MenuView';

const NavView = () => {
    const [menuviewWidth, setMenuviewWidth] = useState(260);

    useEffect(() => {
        const fetchData = async () => {
            const width = await new Promise(resolve => setTimeout(() => resolve(260), 1000));
            setMenuviewWidth(width);
        };
        
        fetchData();
    }, []);

    const handleMenuViewSelectionChange = (selected) => {
        console.log(`Selected menu item: ${selected}`); // Simple implementation demonstrating usage
    };

    return (
        <Box className="navview" sx={{ display: 'flex', flexDirection: 'column', width: 260 }}>
            <TopView />
            <MenuView
                reference="menuview"
                width={menuviewWidth}
                onSelectionChange={handleMenuViewSelectionChange}
                style={{ overflowY: 'auto' }}
            />
        </Box>
    );
};

export default NavView;