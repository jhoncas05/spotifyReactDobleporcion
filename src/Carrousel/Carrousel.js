import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from 'react';

export function Carrousel() {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return (
        <>

            <div className="container mt-5 animate__animated animate__bounce wow">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://firebasestorage.googleapis.com/v0/b/web1-d8c0e.appspot.com/o/double1.webp?alt=media&token=73b5677c-1b78-42d8-870e-9c4cc1061906" height="700" className="w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/web1-d8c0e.appspot.com/o/212.webp?alt=media&token=980d95f1-1191-4cdf-a35b-c3f13cef294a" height="700" className="w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/web1-d8c0e.appspot.com/o/doble.jpeg?alt=media&token=8c8e4638-9bab-4edb-966c-fe128c3ca241" height="700" className="w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    )
}