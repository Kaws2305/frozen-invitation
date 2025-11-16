import '../styles/Dresscode.css';
import dressCode from '../assets/bridal-shower.png';


export function Dresscode () {

    return(
        <section className="dresscode">

            <div className="dresscode__container">

                <div className="dresscode__tittle-container">
                    <h3 className="dresscode__tittle">CODIGO DE VESTIMENTA</h3>
                </div>


                <div className="dresscode__content">

                    <div className="dresscode__image-container">
                        <img src={dressCode} alt="dresscode" className="dresscode__image" />
                    </div>

                    <div className="dresscode__subtittle-container">
                        <h4 className="dresscode__subtittle">FORMAL - ETIQUETA</h4>
                    </div>

                    <div className="dresscode__text-container">
                        <p className="dresscode__text">(EVITE USAR CUALQUIER TONO COLOR AZUL)</p>
                    </div>

                </div>

            </div>

        </section>
    )
};