import 'bootstrap/dist/css/bootstrap.min.css';
import NavIni from '../Componentes/NavIni'
import Dashboard from './Dashboard';
import Footer from '../Componentes/Footer';

function Contenido() {
  return (
        <div>
          <section>
          <NavIni/>
        </section>


        <section>
          <Dashboard/>
        </section>

        <section>
          <Footer/>
        </section>
        </div>
  );
}

export default Contenido;
