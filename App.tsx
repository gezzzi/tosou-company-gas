import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Works } from './components/Works';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GeminiChat } from './components/GeminiChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Works />
        <Contact />
      </main>
      <Footer />
      <GeminiChat />
    </div>
  );
};

export default App;