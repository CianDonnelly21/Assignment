'use client';

    import * as React from 'react';

    import Avatar from '@mui/material/Avatar';

    import Button from '@mui/material/Button';

    import TextField from '@mui/material/TextField';

    import FormControlLabel from '@mui/material/FormControlLabel';

    import Checkbox from '@mui/material/Checkbox';

    import Link from '@mui/material/Link';

    import Container from '@mui/material/Container';

    import Box from '@mui/material/Box';



    export default function Home() {


    const handleSubmit = (event) => {
        console.log("handling submit");
        event.preventDefault();


    const data = new FormData(event.currentTarget);
        let firstName = data.get('firstName')
        let lastName = data.get('lastName')
        let email = data.get('email')
        let address1 = data.get('address1')
        let address2 = data.get('address2')
        let address3 = data.get('address3')
        let password = data.get('password')
        let confirmPassword = data.get('confirmPassword')

        console.log("Sent First Name: " + firstName)
        console.log("Sent Last Name: " + lastName)
        console.log("Sent Email:" + email)
        console.log("Sent Address Line 1: " + address1)
        console.log("Sent Address Line 2: " + address2)
        console.log("Sent Address Line 3: " + address3)
        console.log("Sent Password:" + password)
        console.log("Sent Confirm Password: " + confirmPassword)


    runDBCallAsync(`http://localhost:3000/api/Login?firstName=${firstName}&lastName=${lastName}&email=${email}&address1=${address1}&address2=${address2}&address3=${address3}&password=${password}&confirmPassword=${confirmPassword}`)
    }; // end handle submit


    async function runDBCallAsync(url) {
        const res = await fetch(url);
        const data = await res.json();

            if(data.data== "valid"){
            console.log("login is valid!")
            }
            else {
                console.log("not valid  ")
                }
            }


            return (

                <Container maxWidth="sm">

                <Box
                    sx={{ height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '67px' }}
                >

                <Box
                      sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: 60,
                            backgroundColor: '',
                            color: '#000000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            boxShadow: 1 }}
                  >

                  <h3>Create Account</h3>

                </Box>

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                        marginTop: 8 }}
                    >

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        name="firstName"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="lastName"
                        label="Last Name"
                        id="lastName"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="address1"
                        label="Address Line 1"
                        name="address1"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="address2"
                        label="Address Line 2"
                        name="address2"
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        id="address3"
                        label="Address Line 3 (Optional)"
                        name="address3"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="confirmPassword"
                        label="Confirm Password"
                        name="confirmPassword"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                        marginTop: 3,
                        marginBottom: 2,
                        backgroundColor:'#4caf50' }}
                    >

                        SIGN UP

                    </Button>

                <div
                    style = {{
                        height: '10vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        paddingBottom: 40,
                        textAlign: 'center' }}
                >
                    <p> Already have account? <a href = "/"> LOGIN </a> </p>
                </div>

                </Box>
            </Box>
        </Container>
    ); // end return
}

