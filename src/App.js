import React, {useState} from 'react'
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/formularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App= () => {
  const [tareas, cambiarTareas] = useState([]);

  return (
    <div className="contenedor">
      <Header/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas 
        tareas={tareas}
        cambiarTareas={cambiarTareas}
      />
    </div>
  );
}

export default App;
