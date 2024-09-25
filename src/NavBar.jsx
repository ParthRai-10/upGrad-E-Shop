import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button, Box } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon, Search as SearchIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

const NavBar = () => {
    const location = useLocation(); // Get the current route

    return (
        <AppBar position="static" className="navbar">
            <Toolbar>
                {/* Left section: Logo and title */}
                <Box className="navbar-left" sx={{ display: 'flex', alignItems: 'center' }}>
                    <ShoppingCartIcon className="cart-icon" />
                    <Typography variant="h6" className="navbar-title">
                        upGrad E-Shop
                    </Typography>
                </Box>

                {/* Center section: Search bar */}
                {location.pathname != '/login' && location.pathname != '/signup' ? (
                    <>
                        <Box className="navbar-center" sx={{ flexGrow: 1 }}>
                            <Box className="search-box">
                                <SearchIcon className="search-icon" />
                                <InputBase
                                    placeholder="Search…"
                                    className="search-input"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Box>
                        </Box>
                    </>
                ) : (<></>)}


                {/* Right section: Links and login/signup */}
                <Box className="navbar-right" sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                    {location.pathname === '/login' || location.pathname === '/signup' ? (
                        <>
                            <Link to="/login" style={{ textDecoration: 'none', marginRight: 10 }}>
                                <Typography variant="body1" className="nav-link">
                                    Login
                                </Typography>
                            </Link>
                            <Link to="/signup" style={{ textDecoration: 'none' }}>
                                <Typography variant="body1" className="nav-link">
                                    Sign Up
                                </Typography>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Typography variant="body1" className="nav-link" sx={{ marginRight: 2 }}>
                                Home
                            </Typography>
                            <Typography variant="body1" className="nav-link" sx={{ marginRight: 2 }}>
                                Add Product
                            </Typography>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" className="login-button">
                                    LOGIN
                                </Button>
                            </Link>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;

