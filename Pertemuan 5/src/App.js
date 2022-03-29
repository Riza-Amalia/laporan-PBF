import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Router,
  Link,
} from "react-router-dom";

export default function BasicExample(){
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Router exact path="/">
            <Home />
          </Router>
          <Router path="/about">
            <About />
          </Router>
          <Router path="/dashboard">
            <Dashboard />
          </Router>
        </Switch>
      </div>
    </Router>
  )
}

// Anda dapat menganggap komponen ini sebagai "halaman(konten)" di situs Anda.

function Home(){
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About(){
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard(){
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}