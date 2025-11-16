import '../styles/Confirmation.css';


export function Confirmation () {

    return(

        <section className="confirmation">

            <div className="confirmation__container">

                <div className="confirmation__tittle-container">
                    <h3 className="confirmation__tittle">CONFIRMAR ASISTENCIA</h3>
                </div>


                <div className="confirmation__links-container">

                    <a href="https://wa.me/525543685379?text=Hola%20Miriam%20ahi%20estare.%20" className="link__miriam link__user" target='_blank'>
                        <i class='bx bxl-whatsapp whats__icon'></i>
                        <p className="link__text">CONFIRMAR CON MIRI</p>
                    </a>

                    <a href="https://wa.me/525532184455?text=Hola%20Aldo%20ahi%20estare.%20" className="link__aldo link__user" target='_blank'>
                        <i class='bx bxl-whatsapp whats__icon'></i>
                        <p className="link__text">CONFIRMAR CON ALDO</p>
                    </a>

                </div>

            </div>

        </section>
       
    )
};