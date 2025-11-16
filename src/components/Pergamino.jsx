import '../styles/Pergamino.css';
import pergamino from '../assets/pergamino.png';
import elsa from '../assets/elsa.png';



export function Pergamino () {

    return(
        
        <section className="pergamino">

            <div className="pergamino__container">

                <img src={pergamino} alt="pergamino" className="pergamino__img" />

                <div className="pergamino__text-container">
                    <p className="pergamino__text">" Todos los príncipes,<br></br>princesas y nobles<br></br>corazones del reino de<br></br>Arendelle están<br></br>cordialmente invitados<br></br>a una celebración<br></br>mágica llena de amor,<br></br>nieve y alegría." </p>
                </div>

                <img src={elsa} alt="elsa__img" className="elsa__img" />

            </div>

        </section>
    )
};