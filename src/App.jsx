import React from "react";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Feature from "./Feature/Feature";
import Work from "./Work/Work";

//Styes
import "./App.css";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <Feature />
      <Work />
    </div>
  );
}

export default App;
