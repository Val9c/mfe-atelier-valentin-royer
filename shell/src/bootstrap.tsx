﻿import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from 'header_mfe/Header';
import Footer from 'header_mfe/Footer';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <Header/>
        <App />
        <Footer/>
    </React.StrictMode>,
);