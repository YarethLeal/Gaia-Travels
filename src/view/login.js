import React from 'react'
import "../style/common.css"
import "../style/login.css"
export default function Login() {

    return (
        <main>
            <section className="vh-50 gradient-custom">
                <div className="container py-5 h-50">
                    <div className="row d-flex justify-content-center align-items-center h-50">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">
                                <div className="card-body px-4 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-4">

                                        <h4 className="fw-bold mb-2 text-uppercase">Iniciar Sección / Registro</h4>

                                        <div className="form-outline form-white mb-4 pt-5">
                                            <input type="text" name='user' className="form-control form-control-lg" placeholder='Usuario' />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder='Contraseña' />
                                        </div>

                                        <button className="btn btn-outline-light btn-lg px-5 mx-1 mt-4" type="submit">Iniciar</button>

                                        <button className="btn btn-outline-light btn-lg px-5 mx-1  mt-4" type="submit">Registrarse</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main >
    )
}