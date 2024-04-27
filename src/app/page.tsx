"use client"
import React from 'react';
import { TopBanner } from './components/TopBanner';
import Newsletter from './components/newsletterSignup';

export default function MyApp() {
  return (
    <>
      <TopBanner/>
      <Newsletter/>
    </>  
  );
}