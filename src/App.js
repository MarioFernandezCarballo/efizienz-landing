import Cifras from './components/Cifras';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Pricing from './components/Pricing';
import UseCases from './components/UseCases';
import Ventajas from './components/Ventajas';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Info/>
      <Cifras />
      <div className='container light'>
        <div className='info-quotes'>
          <div >
            <h2>"Simplemente a través de software es posible conseguirlo."</h2>
          </div>
        </div>
      </div>
      <UseCases />
      <Ventajas />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
