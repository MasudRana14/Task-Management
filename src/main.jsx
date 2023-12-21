import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Component/Routes/Router';
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='container mx-auto'>
    <AuthProvider>
    <RouterProvider router={Router} />
    </AuthProvider>
     </div>
  </React.StrictMode>,
)
