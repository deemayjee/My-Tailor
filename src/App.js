import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Card from './components/Card';
import ProductsCard from './components/ProductsCard';




function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <ProductsCard />
    </div>
  );
}

export default App;
