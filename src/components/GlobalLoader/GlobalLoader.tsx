import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './GlobalLoader.css';

export const GlobalLoader = () => (
  <div className="loader">
    <CircularProgress />
  </div>
);
