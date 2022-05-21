import { useState, useEffect } from 'react';
import Card from '../components/layout_items/card.js'
import "../../src/style/common.css"
import Form from '../components/layout_items/form.js';
import Input from '../components/layout_items/input.js';
import Button from '../components/layout_items/button.js';
export default function Empresa() {
    const [empresas, setEmpresas] = useState(null);

    // useEffect(() => {
    //     fetchData()
    // }, []);
    // if (!empresas) return "No se encuentran datos";

    // const fetchData = () => {
    //     setEmpresas()
    // }

    // const showTodos = empresas.map((individual, i) => {
    //     return (
    //         <Card props={individual} fun={(e) => addFavorite(e)} mostrar={false} >
    //         </Card>
    //     )
    // })

    const datos ={
        image:"playa.jpg", nombre:"Avianca" ,texto:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
    const datos1 ={
        image:"playa.jpg", nombre:"Costa Rica Te Enamora" ,texto:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
    const datos2 ={
        image:"playa.jpg", nombre:"Aventuras Tierra Verde" ,texto:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
    const datos3 ={
        image:"playa.jpg", nombre:"SOBOL VIAJES" ,texto:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
    const addFavorite = (e) => { }
    const buscar = (e) => { }

    return (
        <main>
            <div className="body">
                <h1>Empresas</h1>
                <div className='d-inline' id='Filtro'>
                    <Form onSubmit={buscar} name="Filtro">
                        <Input errorMsg="*" className='p-2 is-invalid ' name='Empresa' placeholder='Nombre'></Input>
                        <Button text="Buscar" />
                    </Form>
                </div>
                <div className='row row-cols-1 row-cols-md-4 g-4 m-5'>
                    <Card props={datos}  fun={(e) => addFavorite(e)} mostrar={false} >
                    </Card>
                    <Card props={datos1}  fun={(e) => addFavorite(e)} mostrar={false} >
                    </Card>
                    <Card props={datos2}  fun={(e) => addFavorite(e)} mostrar={false} >
                    </Card>
                    <Card props={datos3}  fun={(e) => addFavorite(e)} mostrar={false} >
                    </Card>
                </div>
            </div>
        </main>
    )


}
