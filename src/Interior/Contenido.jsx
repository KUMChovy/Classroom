import 'bootstrap/dist/css/bootstrap.min.css';
import NavIni from '../Componentes/NavIni'
import Dashboard from './Dashboard';
import Footer from '../Componentes/Footer';

function Contenido() {
  return (
      <body>
        
        <NavIni />


        <section id='dashboard'>
          <Dashboard/>
        </section>

        <section>
          <Footer />
        </section>
      </body>
      

      
  );
}

export default Contenido;
