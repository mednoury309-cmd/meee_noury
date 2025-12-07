import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { AIChat } from './components/AIChat';

function App() {
  return (
    <main className="w-full relative">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <AIChat />
    </main>
  );
}

export default App;
