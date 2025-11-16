import '../styles/Ubication.css';
import { Ubicationcards } from './Ubicationcards';


export function Ubication () {

    return(

        <section className="ubication">

            <div className="ubication__container">

                <div className="ubication__tittle-container">
                    <h3 className="ubication__tittle">UBICACION</h3>
                </div>

                <div className="ubication__cards-container">

                    <Ubicationcards
                    card__tittle='Céremonia Religiosa'
                    card__image='https://lh3.googleusercontent.com/gps-cs-s/AG0ilSymS5pXOwAMJJH8ZKCxCRPQE6wTxXQ6vBlSBKzLOn-MyH3i77_aulSzDeWec6dkYGIAwHwqGqdygeZm1bgbsFYmGNOSacJx6N5dFaJ7CcXXA8tcrO_qpAsCkXXYBa9AybJ4UtAD_g6ksw4j=w289-h312-n-k-no'
                    card__place='CATEDRAL JESÚS SEÑOR DE LA MISERICORDIA' 
                    card__hour='06:30 PM'
                    card__location='Av. Dr. Gustavo Baz 174, Benito Juárez, 57000 Cdad. Nezahualcóyotl, Méx.'
                    card__button='https://maps.app.goo.gl/7RyMR3uAeTxi8gew5' />

                    <Ubicationcards
                    card__tittle='Recepción'
                    card__image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLekxwEy0XL3foApKrKpG7lCFGEMnM3oKDaw&s'
                    card__place='SALÓN AMERIKA' 
                    card__hour='08:00 PM'
                    card__location='Villa de Obregon 394, Jose Vicente Villada, 57710 Cdad. Nezahualcóyotl, Méx.'
                    card__button='https://maps.app.goo.gl/ojGhpuKBpt7Ntrqw9' />

                </div>

            </div>

        </section>
    )
};