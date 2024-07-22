// src/components/Layout/RootLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
// import Footer from '../Footer/Footer';

function RootLayout() {
  return (
    <div style={{ backgroundColor: "#F5F5F5", height: "100%", padding: "2rem",fontFamily:"Montserrat, sans-serif", }}>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default RootLayout;
