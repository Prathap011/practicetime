import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseServices from '../firebase/firebaseSetup';
import './Home.css';
"use client";

//home


import Header from "./Header";
import SubjectTabs from "./SubjectTabs";
import FeatureGrid from "./FeatureGrid";
import ContactForm from "./ContactForm";

function Home() {
  return (
    <main className="landing-container">
      <Header />
      <SubjectTabs />
      <FeatureGrid />
      <ContactForm />

      <style jsx>{`
        .landing-container {
          max-width: 1440px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin: 0 auto;
          background-color: #fff;
         background-image: radial-gradient(circle, #c8bebe 1px, transparent 1px);
          background-size: 20px 20px; /* Adjust this value to control the size of the dots */
        }

        @media (max-width: 991px) {
          .landing-container {
            max-width: 991px;
          }
        }

        @media (max-width: 640px) {
          .landing-container {
            max-width: 640px;
          }
        }
      `}</style>
    </main>
  );
}

export default Home;
