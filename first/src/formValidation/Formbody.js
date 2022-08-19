import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function Formbody() {
    const [data, setData] = React.useState('')

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'))

    const handleChange = (newValue) => {
        setValue(newValue);
    }

    const handleSubmit = (e) => {
        setData(e.target.value)
    }
    return (
        <div >
            {/* <FormControl>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id='outlined-basic' label="Phone" variant='outlined'/>
            </FormControl> */}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'ButtonShadow',
                        borderRadius: "10px",
                        padding: "10px"
                    }}
                >
                    <Typography variant='h4'>Registration</Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id="name"
                            label="Name"
                        />
                        <TextareaAutosize
                            aria-label="empty textarea"
                            placeholder="Empty"
                            style={{ width: 375 }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            //   autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            label='Phone'
                            type='phone'
                            id='phn'
                        />
                        <FormControl sx={{ width: 375 }} >
                            <InputLabel id='select-input' >Country</InputLabel>
                            <Select
                                margin='normal'
                                label='countries'
                                onChange={handleSubmit}
                                value={data}

                            >
                                <MenuItem value={1}>INDIA</MenuItem>
                                <MenuItem value={2}>AUSTRALIA</MenuItem>
                                <MenuItem value={3}>CANADA</MenuItem>
                            </Select>
                        </FormControl>

                        {/* <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        /> */}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Formbody