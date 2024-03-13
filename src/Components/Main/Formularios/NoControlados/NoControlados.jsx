import { useRef, useState } from "react";



export const NoControlados = () =>{

    const form = useRef(null);
    const [error, setError] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        setError("");
        
        // capturar datos
        const data = new FormData(form.current)
        const { title, description, state } = Object.fromEntries([
            ...data.entries()
        ])

        // Validar datos
        if(!title.trim() || !description.trim() || !state.trim())
            return setError('Llena todos los campos')


        //Enviar datos
        console.log( title, description, state )
    }

    // document.addEventListener('submit', (event)=>{
    //     event.preventDefault()
    // })

    return (
        <>
            <h2>Formularios No Controlados</h2>
            <form onSubmit={handleSubmit} ref={form}>
                <input
                    type="text"
                    placeholder="Ingrese Todo"
                    className="form-control mb-2"
                    name="title"
                    defaultValue="todo #01"
                />

                <textarea
                    className="form-control mb-2"
                    placeholder="Ingrese dirección"
                    name="descripcion"
                    defaultValue="descripción #01"
                ></textarea>

                <select
                    className="form-select mb-2"
                    name="state"
                    defaultValue="completado"
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>

                <button type="submit" className="btn btn-primary">
                    Procesar
                </button>
                {error !== '' && error}
            </form>
        </>
    );


}