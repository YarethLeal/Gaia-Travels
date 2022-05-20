import { useState, useEffect } from 'react';
import Card from '../components/layout_items/card.js'
import "../../src/style/common.css"
import data from "../assets/temp.json"
import Form from '../components/layout_items/form.js';
import Input from '../components/layout_items/input.js';
import Button from '../components/layout_items/button.js';
export default function Paquete() {
    const [paquetes, setPaquetes] = useState(data.Temp);

    useEffect(() => {
        fetchData()
    }, []);
    if (!paquetes) return "No se encuentran datos";

    const fetchData = () => {
        setPaquetes(data.Temp)
    }

    const showTodos = paquetes.map((individual, i) => {
        return (
            <Card props={individual} fun={(e) => addFavorite(e)} mostrar={true} >
            </Card>
        )
    })

    const addFavorite = (e) => { }
    const buscar = (e) => { }

    return (
        <main>
            <div className="body">
                <h1>Paquetes</h1>
                <div className='d-inline' id='Filtro'>
                    <Form onSubmit={buscar} name="Filtro">
                        <Input errorMsg="*" className='p-2 is-invalid' name='lugar' placeholder='¿A donde vas?'></Input>
                        <Input errorMsg="*" type="number" min="1" className='p-2 is-invalid' name='Precio_min' placeholder='Precio Minimo'></Input>
                        <Input errorMsg="*" type="number" min="2" className='p-2 is-invalid' name='Precio_max' placeholder='Precio Maximo'></Input>
                        <Input errorMsg="*" className='p-2 is-invalid' name='Personas' placeholder='Cantidad de personas'></Input>
                        <Input errorMsg="*" className='p-2 is-invalid ' name='Empresa' placeholder='Empresa'></Input>
                        <Button text="Buscar" />
                    </Form>
                </div>
                <div className='row row-cols-1 row-cols-md-4 g-4 m-5'>
                    {showTodos}
                </div>
            </div>
        </main>
    )


}
