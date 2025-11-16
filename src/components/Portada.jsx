import '../styles/Portada.css';
import valeria from '../assets/valeria.png';

export function Portada () {

    return(

        <header className="portada">

            <div className="portada__container">

                <div className="tittle__portada-container">
                    <h1 className="tittle__portada">MIS XV AÑOS</h1>
                </div>

                <div className="valeria__image-container">
                    <img src={valeria} alt="valeria" className="valeria__image" />
                </div>

            </div>
            
        </header>
    )
};