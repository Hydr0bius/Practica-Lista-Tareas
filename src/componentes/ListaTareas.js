import React from 'react';
import Tareas from './Tareas';

const ListaTareas = ({tareas}) => {
    return (
        <ul className='lista-tareas'>
            {tareas.length > 0 ? tareas.map((tarea)=>{
                return <Tareas 
                            key={tarea.id}
                            tarea={tarea}
                            />
            })
            :<div className='lista-tareas__mensaje'>~No hay tareas agregadas~</div>
            }
        </ul>
    );
}
 
export default ListaTareas;