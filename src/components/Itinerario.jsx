import '../styles/Itinerario.css';
import bailarina from '../assets/bailarina.png';
import dance from '../assets/dance.png';


export function Iitinerario () {

    return(

        <section className="itinerario">

            <div className="itinerario__container">

                <div className="itinerario__tittle-container">
                    <h3 className="itinerario__tittle">ITINERARIO</h3>
                </div>

                <div className="itinerario__content">

                    <div className="itinerario__line">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-church"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M10 21v-4a2 2 0 0 1 4 0v4" /><path d="M10 5l4 0" /><path d="M12 3l0 5" /><path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" /></svg>
                        
                        <div className="icons__text text__iglesia">
                            <p className="iglesia__text">Ceremonia<br></br>Religiosa<br></br><strong>06:30 pm</strong></p>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper salon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M5 21v-14l8 -4v18" /><path d="M19 21v-10l-6 -4" /><path d="M9 9l0 .01" /><path d="M9 12l0 .01" /><path d="M9 15l0 .01" /><path d="M9 18l0 .01" /></svg>

                        <div className="icons__text text__reception">
                            <p className="reception__text">Recepción<br></br>Bienvenida<br></br><strong>08:00 pm</strong></p>
                        </div>


                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-soup soup"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" /><path d="M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /></svg>

                        <div className="icons__text text__cena">
                            <p className="cena__text">Cena<br></br><strong>08:30 pm</strong></p>
                        </div>

                        <img src={bailarina} alt="bailarina" className="bailarina" />

                        <div className="icons__text text__vals">
                            <p className="vals__text">Vals<br></br><strong>10:00 pm</strong></p>
                        </div>

                        <img src={dance} alt="dance" className="dance" />

                        <div className="icons__text text__baile">
                            <p className="baile__text">A bailar<br></br><strong>11:00 pm</strong></p>
                        </div>



                    </div>

                </div>

            </div>

        </section>
    )
}; 