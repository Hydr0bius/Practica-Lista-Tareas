import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/formularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App= () => {
  //obtenemos las tareas guardadaes de localsorage
  const tareasGuardadas = 
  localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [] ;

  //establecemos el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  //guardando el estado dentro de localstorage
  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(tareas));
  },[tareas]);

  //acceder a localstorage y comprobar si mostrarcompletadas es null
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  }else{
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  //el estado de mostrarcompletadas
  const [mostrarCompletadas, setMostrarCompletadas] = useState (configMostrarCompletadas);

  useEffect(()=>{
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  },[mostrarCompletadas]);

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
