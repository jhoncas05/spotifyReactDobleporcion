import './Integrantes.css'
import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from 'react';

export function Integrantes() {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return (
        <>

            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom ">
                    <img id='img' src="https://firebasestorage.googleapis.com/v0/b/web1-d8c0e.appspot.com/o/metricas.jpg?alt=media&token=d47c881a-b998-4b64-a41f-3fe06fea21d2" alt="la mujer de mi tio" className="img-fluid w-100 mt-3 rounded-circle animate__animated animate__backInDown wow" data-bs-toggle="collapse" data-bs-target="#collapseExample1">
                    </img>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInDown wow'>
                    <h2> Doble Porcion</h2>
                    <h3>Metricas frias</h3>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample1">
                        <div className="card card-body">
                           <b> Santiago Marín Villa, Métricas Frías.</b> conocido artísticamente como  es un MC de la ciudad de Envigado, Antioquia, con más de 10 años de trayectoria en el género Rap/Hiphop.

                            Es integrante de la agrupación Doble Porción, la cual tiene gran relevancia en la escena del hiphop a nivel nacional e internacional.
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div  className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInLeft wow'>
                    <h2> Doble Porcion</h2>
                    <h3>Mañas rufino</h3>
                </div>
                <div className="col-12 col-md-4 zoom ">
                    <img id='img' src="https://firebasestorage.googleapis.com/v0/b/web1-d8c0e.appspot.com/o/ma%C3%B1as.jpg?alt=media&token=c9c28557-6276-4da5-ad50-d61348b046b5" alt="la mujer de mi tio" className="img-fluid w-100 mt-3 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample2">
                    </img>
                </div>

            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse " id="collapseExample2">
                        <div className="card card-body ">
                        <b>Julián Cañas, Mañas Ru-Fino.</b>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}