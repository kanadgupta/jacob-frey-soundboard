import React from "react";
import { Router, Link } from "wouter";

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';


export default function Home() {
  return (
    <Router>
      <Seo />
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
      </main>
      <footer className="footer">
        <div className="links">
          <Link href="/">home</Link>
          <span className="divider">|</span>
          <Link href="/about">about</Link>
        </div>
      </footer>
    </Router>
  );
}
