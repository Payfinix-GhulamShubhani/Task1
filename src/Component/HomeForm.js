import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';




//Creatring break point 
const Root = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(10),
    ":hover": {
        boxShadow: "12px 12px 40px Gray",
    },
    padding: theme.spacing(.5),
    [theme.breakpoints.down('md')]: {
        backgroundImage: "linear-gradient( 68.4deg,  rgba(99,251,215,1) -0.4%, rgba(5,222,250,1) 100.2% )",
        height: '500px',
    },
    [theme.breakpoints.up('md')]: {
        backgroundImage: "linear-gradient(to top, #96fbc4 0%, #f9f586 100%)",
        width: '70%',
        height: '500px',
        marginLeft: 'auto'
    },
    [theme.breakpoints.up('lg')]: {
        backgroundImage: "linear-gradient(to top, #37ecba 0%, #72afd3 100%)",
        width: '60%',
        height: '500px',
        marginLeft: 'auto'
    },
}));

function HomeForm() {
    const [DataSendToTable, setDataSendToTable] = useState({
        tnx: "",
        Select: "",
        multiline: ""
    })

    //After Change in value 
    let handleChange = (e) => { setDataSendToTable({ ...DataSendToTable, [e.target.name]: e.target.value }) }


    console.log("value", DataSendToTable);
    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    //send Data After submit
    let sendData = () => {
        console.log("1", DataSendToTable);
        setDataSendToTable({
            tnx: "",
            Select: "",
            multiline: ""
        })
    }

    //background Inage 
    let styles = {
        paperContainer: {
            backgroundImage: `url(https://picsum.photos/seed/picsum/600/400)`

        }
    }
    return (
        <Root>
            <Box boxShadow={"6px 6px 15px black"}
                borderRadius='10px'
                margin={2}
                sx={{
                    ':hover': {
                        boxShadow: "12px 12px 40px Gray",
                    },
                }}>

                {/* <Paper style={styles.paperContainer}> */}
                <Paper elevation={20} >
                    <Typography variant='body2' align='left'>Raise Complaint</Typography>
                    <Typography variant='body2' sx={{ marginRight: "auto" }}>TNX Id [optional]</Typography>
                    <TextField
                        id="outlined-password-input"
                        label="TNX optional"
                        fullWidth
                        margin="dense"
                        type="text"
                        //value={DataSendToTable}
                        name='tnx'
                        onChange={(e) => { handleChange(e) }}
                    />

                    <Typography variant='body2' sx={{ marginRight: "auto" }}>Issue Type</Typography>
                    <TextField
                        id="margin-normal"
                        margin="normal"
                        fullWidth
                        select
                        label="Select"
                        name='select'
                        //value={DataSendToTable}
                        onChange={(e) => { handleChange(e) }}
                        helperText="Please select your currency"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Typography variant='body2' sx={{ marginRight: "auto" }}>Description</Typography>
                    <TextField
                        fullWidth
                        id="margin-normal"
                        margin="normal"
                        label="Multiline"
                        multiline
                        name='multiline'
                        maxRows={6}
                       // value={DataSendToTable}
                        onChange={(e) => { handleChange(e) }}
                        variant="filled"
                    />

                    <Typography variant='body2' sx={{ marginRight: "auto" }}>Attachment</Typography>
                    <Stack direction="row" alignItems="center" mx={1} spacing={2} id="margin-normal" margin="normal">
                        <Button variant="outlined" component="label" >
                            <Box height='40px' width='70px' alignItems='center'>
                                UPLOAD FILE
                                <input hidden accept="image/*" multiple type="file" />
                            </Box>
                        </Button>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            {/* <PhotoCamera /> */}
                        </IconButton>
                    </Stack>
                    <Stack width='60%' id="margin-normal" mx={11} my={1} alignItems='center'>

                        <Button variant="contained" margin="normal" onClick={() => { sendData() }}>
                            Contained
                        </Button>
                    </Stack>
                </Paper>
            </Box>
        </Root>



    )
}

export default HomeForm