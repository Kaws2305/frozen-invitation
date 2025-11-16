import '../styles/Datecustom.css';
import snow from '../assets/snow_apartado.webp';
import { Countdown } from './Countdown';
import copo from '../assets/copo.png';


export function Datecustom () {

    const targetDate = new Date('2025-12-06T18:30:00').getTime(); // Fecha objetivo (puedes cambiarla)



    return(

        <section className="datecustom">

            <div className="snow__apartado-container">
                <img src={snow} alt="snow" className="snow__apartado" />
            </div>

            <div className="datecustom__container">

                <img src={copo} alt="copo" className="copo__one copos" />
                <img src={copo} alt="copo" className="copo__two copos" />

                <div className="countdown">

                    <Countdown targetDate={targetDate} />

                    <div className="date__text-container">
                        <p className="date__mounth">SÁBADO</p>
                        <p className="date__day">06</p>
                        <p className="date__year">DICIEMBRE</p>
                    </div>
                    

                    
                    
                </div>

            </div>

        </section>
    )
};