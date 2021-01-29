import React, { useState } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import { SnackbarProvider } from 'notistack';
import { NavBar } from '../Nav/NavBar';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

import { Users } from '../Users/Users';
import { CaloriesTable } from '../CaloriesTable/CaloriesTable';
import { GlobalLoader } from '../GlobalLoader/GlobalLoader';
import './App.css';

export const LoaderContext = React.createContext(false);

function App() {
  const [isLoading, setIsLoading] = useState<any>(false);

  return (
    // @ts-ignore
    <LoaderContext.Provider value={setIsLoading}>
      {isLoading && <GlobalLoader />}
      <SnackbarProvider maxSnack={3}>
        <HashRouter>
          <Container maxWidth="lg">
            <AppBar position="static" color="default">
              <Grid container justify="center">
                <NavBar />
              </Grid>
            </AppBar>
            <Route exact path="/" component={CaloriesTable} />
            <Route path="/users" component={Users} />
          </Container>
        </HashRouter>
      </SnackbarProvider>
    </LoaderContext.Provider>
  );
}

export default App;
