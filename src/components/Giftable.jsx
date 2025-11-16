import '../styles/Giftable.css';
import liverpool from '../assets/liverpool.png';
import sears from '../assets/sears.png';


export function Giftable () {

    return(
        <section className="giftable">

            <div className="giftable__container">

                <div className="giftable__tittle-container">
                    <h3 className="giftable__tittle">MESA DE REGALOS</h3>
                </div>

                <div className="giftable__text-container">
                    <p className="giftable__text">Para mí tu presencia es el mejor regalo,<br></br>pero si deseas obsequierme algo te<br></br>sugiero algunas opciones:</p>
                </div>

                <div className="giftable__logos-container">

                    <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51750860" className="liverpool__link" target='_blank'>
                        <img src={liverpool} alt="liverpool-img" className="liverpool__image" />
                        <p className="liverpool__teXT">Liverpool</p>
                    </a>

                    <a href="https://www.sears.com.mx/Mesa-de-Regalos/223515/te-invito-a-mi-xv-anos-dulce-valeria" className="sears__link" target='_blank'>
                        <img src={sears} alt="sears-img" className="sears__image" />
                    </a>


                </div>

                

            </div>


        </section>
    )
};