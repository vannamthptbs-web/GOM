
import React from 'react';
import Header from './components/Header.tsx';
import Introduction from './components/Introduction.tsx';
import PotteryProcess from './components/PotteryProcess.tsx';
import ProductGallery from './components/ProductGallery.tsx';
import CreativeStudio from './components/CreativeStudio.tsx';
import Footer from './components/Footer.tsx';
import Chatbot from './components/Chatbot.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12 space-y-16">
          <Introduction />
          <PotteryProcess />
          <ProductGallery />
          <CreativeStudio />
        </main>
        <Chatbot />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
