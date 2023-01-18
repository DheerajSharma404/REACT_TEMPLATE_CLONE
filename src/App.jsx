import React from "react";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Feature from "./Feature/Feature";

//Styes
import "./App.css";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <Feature />
    </div>
  );
}

export default App;
