import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Barra from './componentes/barra';
import Footer from './componentes/footer';
import Main from './paginas/main';
import SobreNosotros from './paginas/sobrenosotros';
import Productos from './paginas/productos';
import Llantas from './componentes/llantas';
import Tubos from './componentes/tubos';
import Reencauche from './componentes/reencauche';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Barra/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/sobrenosotros' element={<SobreNosotros/>}/>
          <Route path='/productos/' element={<Productos/>}>
            <Route path='llantas' element={<Llantas/>}/>
            <Route path='tubos' element={<Tubos/>}/>
            <Route path='reencauche' element={<Reencauche/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
