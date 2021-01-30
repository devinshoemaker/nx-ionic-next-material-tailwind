import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ExploreContainer from './ExploreContainer';

export function Home() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>Home</Typography>
        </Toolbar>
      </AppBar>
      <ExploreContainer />
    </>
  );
}

export default Home;
