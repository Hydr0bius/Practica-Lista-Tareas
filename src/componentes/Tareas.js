import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

const Tareas = ({ tarea, toggleCompletada, editarTarea, borrarTarea }) => {
    const [editandoTarea, setTarea] = useState(false);
    const [nuevaTarea, setNUevaTarea] = useState(tarea.texto);

    // const
    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        setTarea(false);
    };

    return (
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon
                icon={tarea.completada ? faCheckSquare : faSquare}
                className='lista-tareas__icono lista-tareas__icono-check'
                onClick={()=>toggleCompletada(tarea.id)}
            />
            <div>
                {editandoTarea === true ?
                    <form action='' className='formulario-editar-tarea' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            className='formulario-editar-tarea__input '
                            value={nuevaTarea}
                            onChange={(e) => setNUevaTarea(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='formulario-editar-tarea__btn'
                        >
                            Actualizar
                        </button>
                    </form>
                    : tarea.texto
                }
            </div>
            <div className='lista-tareas__contenedor-botones'>
                <FontAwesomeIcon icon={faEdit}
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={() => setTarea(!editandoTarea)} />

                <FontAwesomeIcon icon={faTimes}
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={() => borrarTarea(tarea.id) }
                />
            </div>
        </li>
    );
}

export default Tareas;