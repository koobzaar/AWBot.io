import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
    </BrowserRouter>
  )
}