import React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Fluroide Treatment',
        description: 'Our children are our Future”. A child brings happiness and strengthens in a family, rewarded like a bridge, create bonding in fam.',
        img: fluoride,
    },
    {
        name: 'Cavity Treatment',
        description: 'Our children are our Future”. A child brings happiness and strengthens in a family, rewarded like a bridge, create bonding in fam.',
        img: cavity,
    },
    {
        name: 'Whitening Treatment',
        description: 'Our children are our Future”. A child brings happiness and strengthens in a family, rewarded like a bridge, create bonding in fam.',
        img: whitening,
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{fontWeight: 400, m: 4, color:'success.main'}} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{fontWeight: 600, m: 4}} variant="h4" component="div">
                    Service We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;