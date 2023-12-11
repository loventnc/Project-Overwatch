import React, { useEffect } from 'react';
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid} from '@mui/material';

import { getPosts } from './actions/posts';
// import Posts from './Components/Posts/Posts';
// import Form from './Components/Form/Form';

const Community = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Community</Typography>
                <Grow in>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Grow>
            </AppBar>
        </Container>
    )
}

export default Community;