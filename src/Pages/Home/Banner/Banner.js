import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400

}

const Banner = () => {
    return (
        <div>
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box>
                            <Typography variant="h3">
                                Your New Smile <br />
                            </Typography>
                            <Typography variant="h6" sx={{ fonSize: 13, fontWeight: 300, color: 'gray' }}>
                                Our children are our Future”. A child brings happiness and strengthens in a family, rewarded like a bridge, create bonding in fam.
                            </Typography>
                            <Button style={{ background: '#5CE7ED' }} variant="contained">Make An Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: '350px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;