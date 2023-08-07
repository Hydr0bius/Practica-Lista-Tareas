import React, {useState} from 'react'
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/formularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App= () => {
  const [tareas, cambiarTareas] = useState(
    [
        // {
        //     id:1,
        //     texto:'laavr la ropa',
        //     completada: false,
        // },
        // {
        //     id: 2,
        //     texto: 'grabar tutorial',
        //     completada: false,
        // },
    ],
  );

  return (
    <div className="contenedor">
      <Header/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas}/>
    </div>
  );
}

export default App;
