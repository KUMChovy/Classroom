import 'bootstrap/dist/css/bootstrap.min.css';
import NavIni from '../Componentes/NavIni'
import Dashboard from './Dashboard';

function Contenido() {
  return (
      <body>
        
        <NavIni />


        <section id='dashboard'>
          <Dashboard/>
        </section>
      </body>
      

      
  );
}

export default Contenido;
