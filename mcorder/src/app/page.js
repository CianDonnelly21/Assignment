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
        let email = data.get('email')
        let password = data.get('password')

        console.log("Sent email:" + email)
        console.log("Sent password:" + password)


    runDBCallAsync(`http://localhost:3000/api/Login?email=${email}&password=${password}`)
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
                    alignItems: 'center' }}
                >

                <Box sx={{
                    marginBottom: 3,
                    position: 'relative',
                    width: '200px' }}
                >

                <img
                    src="/Images/McOrder_Img.png"
                    alt="McOrder"
                    style={{
                    width: '200px',
                    borderRadius: '12px' }}
                />

                </Box>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: 400,
                        borderRadius: 2,
                        overflow: 'hidden',
                        backgroundImage: 'url(/Images/Form_Background.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: 2.5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center' }}
                    >

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
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

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        marginTop: 3,
                        marginBottom: 2,
                        backgroundColor:'#4caf50' }}
                >

                    <a href = "/Customer" style={{ textDecoration: "none", color: "inherit" }}> LOGIN </a> //Link doesn't work on home page it wont let me log back in
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
                    <p> Don't have account? <a href = "/Register"> Register here</a> </p>
                </div>

                </Box>
            </Box>
        </Container>
    ); // end return
}

