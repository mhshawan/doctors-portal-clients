import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175

}


const AppointmentBanner = () => {
    return (
        <div>
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: 400, marginTop: '-110px' }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ 
                        display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center'}}>
                        <Box>
                            <Typography variant="h6" sx={{ mb:5 }}style={{ color: '#5CE7ED' }}>
                                Appointment
                            </Typography>
                            <Typography variant="h4" style={{ color: 'white' }}>
                                Make An Appointment Today
                            </Typography>
                            <Typography variant="h6" sx={{ my:5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                                Our children are our Future”. A child brings happiness and strengthens in a family, rewarded like a bridge, create bonding in fam.
                            </Typography>
                            <Button style={{ background: '#5CE7ED' }}variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;