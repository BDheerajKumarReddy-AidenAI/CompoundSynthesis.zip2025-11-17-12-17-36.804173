import React, { useState } from 'react';
import { Box } from '@mui/material';
import MenuList from './MenuList'; // Ensure this component exists
import HomeView from './HomeView';
import CompoundRequestForm from './CompoundRequestForm';
import TrackingPanel from './TrackingPanel';
import Dashboard from './Dashboard';
import 'path/to/your/style.scss'; // Confirm the path to styles is correct

const MenuView = () => {
    const [navCollapsed, setNavCollapsed] = useState(false);

    const menuItems = [
        {
            text: 'Home',
            iconCls: 'x-fa fa-home',
            component: <HomeView />,
            leaf: true
        },
        {
            text: 'Request Form',
            iconCls: 'x-fa fa-file-alt',
            component: <CompoundRequestForm />,
            leaf: true
        },
        {
            text: 'Tracking Panel',
            iconCls: 'x-fa fa-chart-line',
            component: <TrackingPanel />,
            leaf: true
        },
        {
            text: 'Dashboard',
            iconCls: 'x-fa fa-chart-pie',
            component: <Dashboard />,
            leaf: true
        }
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', width: '100%' }}>
            <MenuList items={menuItems} navCollapsed={navCollapsed} setNavCollapsed={setNavCollapsed} />
        </Box>
    );
};

export default MenuView;