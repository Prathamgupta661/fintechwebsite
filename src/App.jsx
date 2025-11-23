import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductHighlights from './components/ProductHighlights';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ProductHighlights />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
