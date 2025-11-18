import '../styles/Parents.css';
import esquinero from '../assets/esquinero.png';



export function Parents () {

    return(

        <section className="parents">

            <div className="parents__container">


                <div className="parents__phrase-one-container">
                    <p className="parents__phrase-one">Con todo mi corazón,<br></br>agradezco con la bendición<br></br> de Dios a</p>
                </div>

                <div className="parents__padres-container ">
                    <h4 className="padres__tittle">- MIS PADRES -</h4>
                    <img src={esquinero} alt="esquinero" className="esquinero__one" />
                    <p className="parents__padres">Miriam Rivera<br></br>Aldo Pimentel</p>
                </div>

                <div className="parents__padrinos-container">
                    <h4 className="padrinos__tittle">- MIS PADRINOS -</h4>
                    <img src={esquinero} alt="esquinero" className="esquinero__one" />
                    <p className="parents__padrinos">Juan López<br></br>Vicky Gutiérrez</p>
                </div>

                <div className="parents__phrase-two-container">
                    <p className="parents__phrase-two">Por ser parte de esta<br></br>nueva etapa. Nos<br></br>complace invitarte a ser<br></br>parte de este gran día.</p>
                </div>

            
            </div>

        </section>
    )
};