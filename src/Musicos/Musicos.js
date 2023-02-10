import { Footer } from '../Footer/Footer.js'
import { Carrousel } from '../Carrousel/Carrousel.js'

export function Musicos() {

    //un arreglo de objetos es formato comun al consumir un api

    let musicos = [
        {
            nombre: "Metricas frias",
            rol: "Vocalista",
            url: "https://firebasestorage.googleapis.com/v0/b/web1-d8c0e.appspot.com/o/doble2equipo.jpg?alt=media&token=5904c64e-346a-44fe-b8bf-749a1f959f52"
        },
        {
            nombre: "Mañas rufino",
            rol: "Vocalista",
            url: "https://firebasestorage.googleapis.com/v0/b/web1-d8c0e.appspot.com/o/doble3equipo.jpg?alt=media&token=bd019163-4e04-4efa-9e3f-eabf98d4997f"
        }
    ]

    let conciertosMemorables = [
        {
            fecha: "17/6/2019",
            ubicacion: "Bogota, colombia",
            descripcion: "Los artistas de Moebiuz lanzaron sus nuevas canciones en Bogotá y dieron una gran fiesta para un público heterogéneo que esperaba con ansias canciones como “No Copio” y “María”.",
            foto: "https://firebasestorage.googleapis.com/v0/b/web1-d8c0e.appspot.com/o/concert1.jpg?alt=media&token=e210caa0-afe2-45b3-a2ba-531f010b651b"
        },
        {
            fecha: "31/7/2021",
            ubicacion: "Cundinamarca, colombia",
            descripcion: "el festival de Hip Hop ‘This is Real’, presentará en el festival a: Tres Coronas; Afu-ra; Doble Porción; Anarkía; DJ 113 and Friends .",
            foto: "https://firebasestorage.googleapis.com/v0/b/web1-d8c0e.appspot.com/o/concert2.webp?alt=media&token=f7aa55e7-b9bb-46fb-b0ab-a83f4333dad7"
        },
        {
            fecha: "5/12/2015",
            ubicacion: "Bucaramanga, colombia",
            descripcion: "Los artistas de Doble porcion, la rompieron en su concierto en el hipodromo libre de bucaramanga con sus mejores exitos",
            foto: "https://firebasestorage.googleapis.com/v0/b/web1-d8c0e.appspot.com/o/concert3.jpg?alt=media&token=a4681c18-a663-4cac-9055-9345d489ce1b"
        },
        {
            fecha: "2/6/2018",
            ubicacion: "Bogota, colombia",
            descripcion: "En Bogotá hacia falta el flow callejero y poético en vivo de los raperos paisas de la agrupación Doble Porción Por eso el proximo 2 de junio en el Auditorio Lumiere se celebrara Manzanas A La Vuelta (Su más reciente álbum) en la cuidad de Bogotá. Una cita para cantar a todo pulmón todos los temas del álbum y además canciones clásicas de Doble Porción de sus anterior álbum: El Abrebocas",
            foto: "https://firebasestorage.googleapis.com/v0/b/web1-d8c0e.appspot.com/o/concert4.jpg?alt=media&token=cedce9b1-bf80-4937-bf2d-bd6cd832b032"
        },
        {
            fecha: "8/5/2022",
            ubicacion: "Medellin, colombia",
            descripcion: "El duo de raperos se presentan en la ciudad que los vio nacer con su album 'que parezca concierto' uno de sus ultimos conciertos en pareja, ",
            foto: "https://firebasestorage.googleapis.com/v0/b/web1-d8c0e.appspot.com/o/concert5.jpeg?alt=media&token=7222f77a-ce30-4dd5-8edd-dbd7eeea0232"
        },

    ]

    //mapeando un arreglo para hacer render
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center ">
                {
                    musicos.map((musico) => {
                        return (
                            <>
                                <div className="col mt-5 ">
                                    <div className="card h-100 align-content-center border-5 border-dark">
                                        <img src={musico.url} className="img-fluid h-100 p-1 w-100" alt="foto" />
                                        <h1 className="text-center  text-danger fs-3 mt-2">{musico.nombre}</h1>
                                        <h1 className="text-center  fs-3 text-info">{musico.rol}</h1>
                                    </div>
                                </div>
                            </>

                        )

                    })
                }
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center ">
                {
                    conciertosMemorables.map((conciertoMemorable) => {
                        return (
                            <>
                                <div className="col mt-5 ">
                                    <div className="card h-100 align-content-center border-3 border-dark">
                                        <img src={conciertoMemorable.foto} className="img-fluid h-100 p-1 w-100" alt="foto" />
                                        <h1 className="text-center fs-5 text-danger mt-2">{conciertoMemorable.ubicacion}</h1>
                                        <h1 className="text-center fs-5 text-info ">{conciertoMemorable.fecha}</h1>
                                        
                                        <h1 className="text-center fs-5 text-dark">{conciertoMemorable.descripcion}</h1>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div>
            <Carrousel></Carrousel>
            </div>
            <div >
                <Footer></Footer>
            </div>
            
        </>

    )

}

