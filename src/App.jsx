//IMPORT CSS APP
import './App.css';
//IMPORT COMPONENTS JSX
import { Modals } from './components/Modals';
import { Portada } from './components/Portada';
import { Datecustom } from './components/Datecustom';
import { Pergamino } from './components/Pergamino';
import { Pictures } from './components/Pictures';
import { Parents } from './components/Parents';
import { Ubication } from './components/Ubication';
import { Iitinerario } from './components/Itinerario';
import { Dresscode } from './components/Dresscode';
import { Giftable } from './components/Giftable';
import { Confirmation } from './components/Confirmation';
import { Phrase } from './components/Phrase';



export function App (){

    return(

        <section className="app">
            
            <Modals />
            <Portada />
            <Datecustom />
            <Pergamino />
            <Pictures />
            <Parents />
            <Ubication />
            <Iitinerario />
            <Dresscode />
            <Giftable />
            <Confirmation />
            <Phrase />

            
        </section>
    )
};