import '../styles/Pictures.css';
import apartadOne from '../assets/apartado_one.webp';
import { ImageSlider } from './ImageSlider';
import slideOne from '../assets/slide-one.jpg';
import slideTwo from '../assets/slide-two.jpg';
import slideTree from '../assets/slide-tree.jpg';
import slideFour from '../assets/slide-four.jpg';
import slideFive from '../assets/slide-five.jpg';
import slideSix from '../assets/slide-six.jpg';
import slideSeven from '../assets/slide-seven.jpg';
import slideEigth from '../assets/slide-eigth.jpg';
import slideNine from '../assets/slide-nine.jpg';
import slideTeen from '../assets/slide-ten.jpg';
import slideEleven from '../assets/slide-eleven.jpg';
import slideTwelve from '../assets/slide-twelve.jpg';
import slideThirteen from '../assets/slide-thirteen.jpg';
import slideFourteen from '../assets/slide-fourteen.jpg';



const images = [
    slideOne,
    slideTwo,
    slideTree,
    slideFour,
    slideFive,
    slideSix,
    slideSeven,
    slideEigth,
    slideNine,
    slideTeen,
    slideEleven,
    slideTwelve,
    slideThirteen,
    slideFourteen,
];



export function Pictures () {

    return(
        <section className="pictures">

            <div className="apartado__one-container">
                <img src={apartadOne} alt="apartado-img" className="apartado__one" />
            </div>

            <div className="pictures__container">

                <div className="slide__tittle-container">
                    <h2 className="slide__tittle">MIS FOTOS</h2>
                </div>

                <div className="slider__container">
                   <ImageSlider images={images} />
                </div>

                <div className="slide__text-container">
                    <p className="slide__text">(Escoge izquierda o derecha)</p>
                </div>

            </div>

        </section>
    )
};