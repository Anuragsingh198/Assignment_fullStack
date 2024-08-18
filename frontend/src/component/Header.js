import { ArrowForward } from '@mui/icons-material';
import { Box, Typography, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardDisplay from './CardDisplay';
import { useValue } from '../context/ContextProvider';
import { GetCardByBranchName } from '../Action/GetCards';

const Header = () => {
    const [search, setSearch] = useState('');
    const { dispatch } = useValue();

    const formatSearchText = (text) => {
        if (!text) return '';
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };

    const handleSearchChange = (event) => {
        const inputValue = event.target.value;
        setSearch(formatSearchText(inputValue));
         
    };

    const handleSearchSubmit = () => {
        // Implement search logic here
        console.log('Search:', search);
    GetCardByBranchName(dispatch , search);
    };
    useEffect(()=>{
         dispatch({type:"SET_SEARCH" , payload: search});
    } , [search])

    return (
        <>
            <div style={{ width: '100%', height: '50vh', backgroundColor: '#cfe8fc', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '16px',
                        width: '80%',
                        height: '100%'
                    }}
                >
                    <Typography variant="h4" component="h1" sx={{ mb: 2, fontWeight: '700' }}>
                        How Can We Help You?
                    </Typography>
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearchChange}
                        sx={{ width: '60%' }}
                        InputProps={{
                            endAdornment: (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ ml: 1, backgroundColor: 'transparent', boxShadow: 'none', color: 'black' }}
                                    onClick={handleSearchSubmit}
                                >
                                    <ArrowForward />
                                </Button>
                            ),
                        }}
                    />
                </Box>
            </div>

        </>
    );
};

export default Header;
