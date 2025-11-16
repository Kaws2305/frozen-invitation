import '../styles/Parents.css';
import arcOne from '../assets/arco-one.png';
import arcoTwo from '../assets/arco-two.png';


export function Parents () {

    return(

        <section className="parents">

            <div className="parents__container">

                <div className="arco__one-container">

                    <img src={arcoTwo} alt="arco" className="arco__one" />

                    <div className="arco__text-container">
                        <h3 className="arco__tittle">MIS PADRES</h3>
                        <p className="arco__text">MIRIAM RIVERA<br></br>ALDO PIMENTEL</p>
                    </div>

                </div>


                <div className="arco__one-container-two">

                    <img src={arcOne} alt="arco" className="arco__two" />

                    <div className="arco__text-container-two">
                        <h3 className="arco__tittle-two">MIS PADRINOS</h3>
                        <p className="arco__text-two">JUAN LOPEZ<br></br>VICKY GUTIERREZ</p>
                    </div>

                </div>

            </div>

        </section>
    )
};