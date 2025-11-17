import React from 'react';
import { Box, Button, Toolbar, Typography, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
// Assuming Font Awesome is installed and imported correctly, e.g., from FontAwesome library.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faPlus, faSearch, faTachometerAlt, faPaperPlane, faClock, faFlask, faCheck, faList, faPlusCircle, faChartBar } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const navigate = useNavigate();

    const recentRequests = []; // Sample data; replace with fetching logic

    const handleViewRequest = (id) => {
        navigate(`/view-request?id=${id}`);
    };

    const handleEditRequest = (id, status) => {
        if (status === 'SUBMITTED') {
            navigate(`/edit-request?id=${id}`);
        }
    };

    const columns = [
        { field: 'id', headerName: 'Request ID', flex: 1 },
        { field: 'compoundName', headerName: 'Compound Name', flex: 2 },
        {
            field: 'priorityLevel',
            headerName: 'Priority',
            flex: 1,
            renderCell: (params) => <span className={`priority-${params.value.toLowerCase()}`}>{params.value}</span>
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            renderCell: (params) => <span className={`status-${params.value.toLowerCase()}`}>{params.value}</span>
        },
        { field: 'requestDate', headerName: 'Submitted', flex: 1, valueGetter: (params) => new Date(params.value).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 2,
            renderCell: (params) => (
                <>
                    <Button
                        onClick={() => handleViewRequest(params.row.id)}
                        startIcon={<FontAwesomeIcon icon={faEye} />}
                    >
                        View
                    </Button>
                    <Button
                        onClick={() => handleEditRequest(params.row.id, params.row.status)}
                        startIcon={<FontAwesomeIcon icon={faEdit} />}
                    >
                        Edit
                    </Button>
                </>
            )
        }
    ];

    return (
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}>
            <Toolbar>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
                </Typography>
                <Button onClick={() => navigate('/request-form')} startIcon={<FontAwesomeIcon icon={faPlus} />}>
                    New Request
                </Button>
                <Button onClick={() => navigate('/tracking')} startIcon={<FontAwesomeIcon icon={faSearch} />}>
                    Track Requests
                </Button>
            </Toolbar>

            <Grid container spacing={2}>
                {[
                    { icon: faPaperPlane, count: 0, label: 'Total Requests' },
                    { icon: faClock, count: 0, label: 'Pending Approval' },
                    { icon: faFlask, count: 0, label: 'In Synthesis' },
                    { icon: faCheck, count: 0, label: 'Completed' }
                ].map(item => (
                    <Grid item xs={6} sm={3} key={item.label}>
                        <Box sx={{
                            padding: 2,
                            borderRadius: '10px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            textAlign: 'center',
                            background: '#f8f9fa'
                        }}>
                            <FontAwesomeIcon icon={item.icon} size="2x" style={{ color: '#3498db' }} />
                            <h3>{item.count}</h3>
                            <p>{item.label}</p>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ margin: '20px 0' }}>
                <Typography variant="h6">
                    <FontAwesomeIcon icon={faList} /> Recent Requests
                </Typography>
                <DataGrid
                    rows={recentRequests}
                    columns={columns}
                    pageSize={5}
                    autoHeight
                    rowsPerPageOptions={[5, 10, 20]}
                    components={{
                        NoRowsOverlay: () => (
                            <Box sx={{ textAlign: 'center', padding: 2 }}>
                                No requests found. <a href="/request-form">Submit your first request</a>
                            </Box>
                        )
                    }}
                />
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                marginTop: 2
            }}>
                {[
                    { icon: faPlusCircle, title: 'New Request', description: 'Submit a new compound synthesis request', redirectFn: '/request-form' },
                    { icon: faSearch, title: 'Track Progress', description: 'Monitor your request status and progress', redirectFn: '/tracking' },
                    { icon: faChartBar, title: 'View Reports', description: 'Access synthesis reports and analytics', redirectFn: '/reports' }
                ].map(item => (
                    <Box key={item.title} sx={{
                        flex: 1,
                        padding: 2,
                        margin: '10px 10px 10px 0',
                        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                        borderRadius: '10px',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer'
                    }} onClick={() => navigate(item.redirectFn)}>
                        <FontAwesomeIcon icon={item.icon} size="2x" />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Dashboard;