import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
//     route for home page
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
//   route for post page
          <Route path="/posts" exact component={Home} />
//             route for post search page
          <Route path="/posts/search" exact component={Home} />
//             route for post ID page
          <Route path="/posts/:id" exact component={PostDetails} />
//             route for creator page
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
//             route for auth page
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
