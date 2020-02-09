import React from 'react';
import Upload from './Components/upload';
import Resume from './Components/resume';
const routes = [
    { path: '/resume', name: 'Resume', component: Resume },
    { path: '/upload', name: 'Upload', component: Upload },

    {
      redirect: true, path: '/', to: '/', name: 'Home'
    }
];
export default routes;
