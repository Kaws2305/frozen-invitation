import '../styles/Pergamino.css';
import pergamino from '../assets/pergamino.png';
import elsa from '../assets/elsa.png';



export function Pergamino () {

    return(
        
        <section className="pergamino">

            <div className="pergamino__container">

                <img src={pergamino} alt="pergamino" className="pergamino__img" />

                <div className="pergamino__text-container">
                    <p className="pergamino__text">" TODOS LOS PRINCIPES,<br></br>PRINCESAS Y NOBLES<br></br>CORAZONES DEL REINO DE<br></br>ARENDELLE ESTAN<br></br>CORDIALMENTE INVITADOS<br></br>A UNA CELEBRACION<br></br>MAGICA LLENA DE AMOR,<br></br>NIEVE Y ALEGRIA." </p>
                </div>

                <img src={elsa} alt="elsa__img" className="elsa__img" />

            </div>

        </section>
    )
};