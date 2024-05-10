import Cifras from './components/Cifras';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Pricing from './components/Pricing';
import UseCases from './components/UseCases';


function App() {
  return (
    <div className="App light">
      <Header />
      <Hero />
      <Info/>
      <Cifras />
      <UseCases />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
