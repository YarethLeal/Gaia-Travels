import "../../src/style/common.css"
import "../../src/style/home.css"
import Footer from "../components/layout/footer"
import Button from "../components/layout_items/button"
import Card from "../components/layout_items/card"
import Form from "../components/layout_items/form"
import Input from "../components/layout_items/input"
export default function Home() {

    return (
        <main>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Bosque, playa o montaña</h1>
                                <p>Nosotros te ayudamos a reconectar con la naturaleza</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>

                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Aventura</h1>
                                <p>Te encontramos nuevos lugares para explorar a un comodo precio</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>

                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Solo o acompañado</h1>
                                <p>Paquetes para parejas,familias o esos aventureros solitarios</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div id="lugares" >
                <h2 className="text-start">Sitios turisticos</h2>
                <div id="tarjetas" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
                    <Card props={{
                        "nombre": "Costa Rica",
                        "image": "playa.jpg",
                        "texto": "lorem impsum",
                        "lugar": "Costa Rica",
                        "precio": "$200",
                        "empresa": "Gaia S.A'"
                    }} mostrar={false}></Card>
                    <Card props={{
                        "nombre": "Puerto Rico",
                        "image": "playa.jpg",
                        "texto": "lorem impsum",
                        "lugar": "Costa Rica",
                        "precio": "$200",
                        "empresa": "Gaia S.A'"
                    }} mostrar={false}></Card>
                    <Card props={{
                        "nombre": "Chile",
                        "image": "playa.jpg",
                        "texto": "lorem impsum",
                        "lugar": "Costa Rica",
                        "precio": "$200",
                        "empresa": "Gaia S.A'"
                    }} mostrar={false}></Card>
                </div>
            </div>
            <div id="consulta">
                <h2 className="text-start">Contacto</h2>
                <Form onSubmit={""} name="contacto">
                    <Input errorMsg="Ingrese el email" className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full mx-2' name='email' type="email" placeholder='Email:'></Input>
                    <Input errorMsg="Ingrese la informacion" className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full mx-2' name='descripcion' type="text" placeholder='Informacion:'></Input>
                    <Button text="Enviar" />
                </Form>
            </div>
            <Footer></Footer>
        </main >
    )
}