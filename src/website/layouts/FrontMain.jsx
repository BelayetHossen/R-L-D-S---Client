import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../frontend/shared/Header';
import Footer from '../frontend/shared/Footer';

const FrontMain = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default FrontMain;