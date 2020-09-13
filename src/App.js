import React, { createContext, useState } from 'react';
import './App.css';
import SideMenu from './Components/SidebarMenu/SideMenu';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from './Components/Header';
import Form from './Components/Form/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import PrivateRouter from './Components/Login/PrivateRouter';

export const UserContext = createContext();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#7986cb'
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081'
    },
    background: {
      default: '#E7EAED'
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '300px',
    width: '100%'
  }
})

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const classes = useStyles();
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
        <ThemeProvider theme={theme}>
          <SideMenu />
          <div className={classes.appMain}>
            <Header />
            <p>Name: {loggedInUser.name}</p>
            
            <Switch>
              <Route path='/home'>
                <Login />
              </Route>
              <PrivateRouter>
                  <Form />
              </PrivateRouter>
            </Switch>
          </div>
          <CssBaseline />
        </ThemeProvider>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
