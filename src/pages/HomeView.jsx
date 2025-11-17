import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

const featureData = [
    {
        id: 1,
        icon: 'fas fa-paper-plane',
        title: 'Submit Requests',
        description: 'Submit detailed compound synthesis requests with automated validation and pre-screening.',
    },
    {
        id: 2,
        icon: 'fas fa-search',
        title: 'Track Progress',
        description: 'Monitor your requests in real-time through our comprehensive tracking system.',
    },
    {
        id: 3,
        icon: 'fas fa-shield-alt',
        title: 'Compliance',
        description: 'Automated compliance checks for controlled substances and regulatory requirements.',
    },
    {
        id: 4,
        icon: 'fas fa-users',
        title: 'Collaboration',
        description: 'Seamless workflow between discovery scientists, supervisors, and synthesis teams.',
    },
];

const FeatureCard = ({ icon, title, description, onClick }) => (
    <Paper elevation={3} sx={{ width: 300, height: 180, m: 1, p: 2, cursor: 'pointer' }} onClick={onClick}>
        <div className="feature-content">
            <i className={icon}></i>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
        </div>
    </Paper>
);

const HomeView = () => {
    const handleCardClick = (featureTitle) => {
        alert(`Card Clicked: ${featureTitle}`);
    };

    return (
        <Box className="home-view" sx={{ padding: 4, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            <Typography variant="h1" className="main-heading" gutterBottom>
                Start Exploring our Innovations
            </Typography>

            <Box className="highlight-card" sx={{ padding: 3, marginBottom: 3, height: 200, display: 'flex' }}>
                <Box flex={1} display="flex" flexDirection="column" justifyContent="center">
                    <Typography variant="h2" className="highlight-title">
                        Welcome to the Compound Synthesis Request Management System
                    </Typography>
                    <Typography variant="body1" className="highlight-desc">
                        Streamline your pharmaceutical research with our comprehensive compound synthesis request platform.
                    </Typography>
                </Box>
                <Box display="flex" alignItems="flex-end" flex={0}>
                    <Button variant="contained" className="btn-primary" sx={{ marginLeft: 2 }}>
                        Get Started →
                    </Button>
                </Box>
            </Box>

            <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="stretch">
                {featureData.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        onClick={() => handleCardClick(feature.title)}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default HomeView;