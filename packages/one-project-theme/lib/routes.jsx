/*
A new custom route for our custom page. 
Browse to http://localhost:3000/my-custom-route to see it.
*/

import React from 'react';
import {mount} from 'react-mounter';

import AboutPage from './components/AboutPage.jsx';

FlowRouter.route('/about', {
  name: 'about',
  action(params, queryParams) {

    mount(Telescope.components.App, {content: <AboutPage />})
  }
});