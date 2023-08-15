"use client"
import React from 'react';
import Navbar from './components/Navbar';
import Head from 'next/head';
import UnderConstruction from './components/UnderConstruction';
import './globals.css';

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <UnderConstruction />
    </div>
  )
}
