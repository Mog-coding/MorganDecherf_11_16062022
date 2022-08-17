import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import HousingPage from './pages/HousingPage/HousingPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import Error404 from './pages/Error404/Error404';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/housing/:id">
                    <HousingPage />
                </Route>
                <Route path="/aboutus">
                    <AboutUsPage />
                </Route>
                <Route path="/404">
                    <Error404 />
                </Route>
                <Route>
                    <Error404 />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </React.StrictMode>
);
