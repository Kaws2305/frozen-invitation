import '../styles/Giftable.css';
import liverpool from '../assets/liverpool.png';


export function Giftable () {

    return(
        <section className="giftable">

            <div className="giftable__container">

                <div className="giftable__tittle-container">
                    <h3 className="giftable__tittle">MESA DE REGALOS</h3>
                </div>

                <div className="giftable__logos-container">

                    <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51750860" className="liverpool__link" target='_blank'>
                        <img src={liverpool} alt="liverpool-img" className="liverpool__image" />
                        <p className="liverpool__teXT">Liverpool</p>
                    </a>
                </div>

                <div className="giftable__text-container">
                    <p className="giftable__text">DA UN CLICK, PARA ENTRAR A LA MESA DE REGALOS.</p>
                </div>

            </div>


        </section>
    )
};