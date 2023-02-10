import './Home.css'

import { SubMenu } from '../SubMenu/SubMenu.js'

import { Footer } from '../Footer/Footer.js'

export function Home(){
    let descripcionBanda="Doble Porción de rimas, de vivencias. Dos maneras de vivir y narrar la calle. Una amistad de acero, a prueba de malas rachas, que se desembocó en canciones. Métricas Frías usa su voz suave y melódica, Mañas Ru-Fino, en cambio, raspa los oídos como lija con su voz carraspoza. Juntos son los dueños de un rap nostálgico, introspectivo y con mucho sabor a calle. La banda sonora de una caminata nocturna."

    return(
        <>
            
            <div className='banner'></div>
            <div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='text-center text'>Doble Porcion</h1>
                            <p className='text-center'>{descripcionBanda}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SubMenu></SubMenu>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )

}