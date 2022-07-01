import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage';
import HousingPage from './pages/HousingPage/HousingPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import Error404 from './pages/Error404/Error404';
import CarouselComponent from './components/CarouselComponent/CarouselComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
          <CarouselComponent />
        </Route>
        <Route path="/housingpage">
          <HousingPage />
        </Route>
        <Route path="/aboutuspage">
          <AboutUsPage />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);