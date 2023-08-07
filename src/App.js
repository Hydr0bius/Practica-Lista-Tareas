import React, {useState} from 'react'
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/formularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App= () => {
  const [tareas, cambiarTareas] = useState([]);
  const [mostrarCompletadas, setMostrarCompletadas] = useState (false);

  return (
    <div className="contenedor">
      <Header 
        mostrarCompletadas={mostrarCompletadas} 
        setMostrarCompletadas={setMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas 
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas = {mostrarCompletadas}
      />
    </div>
  );
}

export default App;
