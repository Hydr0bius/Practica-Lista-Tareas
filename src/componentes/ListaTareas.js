import React from 'react';
import Tareas from './Tareas';

const ListaTareas = ({tareas, cambiarTareas}) => {
    //funcion para completar tarea
    const toggleCompletada = (id)=>{
        cambiarTareas(tareas.map((tarea)=>{
            if(tarea.id === id){
                return {...tarea, completada: !tarea.completada};
            };
            return tarea;
        }));
    };
    //funcion para editar tarea
    const editarTarea = (id, nuevoTexto)=>{
        cambiarTareas(tareas.map((tarea)=>{
            if(tarea.id === id){
                return {...tarea, texto: nuevoTexto};
            };
            return tarea;
        }));
    };
    //funcion para borrar tarea
    const borrarTarea = (id) =>{
            cambiarTareas(tareas.filter((tarea)=>{
                if(tarea.id !== id){
                    return tarea;
                };
                return;
            }));
    };

    return (
        <ul className='lista-tareas'>
            {tareas.length > 0 ? tareas.map((tarea)=>{
                return <Tareas 
                            key={tarea.id}
                            tarea={tarea}
                            toggleCompletada={toggleCompletada}
                            editarTarea = {editarTarea}
                            borrarTarea = {borrarTarea}
                        />
            })
            :<div className='lista-tareas__mensaje'>~No hay tareas agregadas~</div>
            }
        </ul>
    );
}
 
export default ListaTareas;