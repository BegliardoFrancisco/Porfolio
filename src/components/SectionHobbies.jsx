import '../styles/SectionHobbies.css'
import '../styles/icon.css'
import GuitarHobbieIcon from "../assets/GuitarHobbieIcon";
import MicrophoneHobbieIcon from '../assets/MicrophoneIcon';
import BasketHobbieIcon from '../assets/baskeHobbietIcon';
import GamerHobbieIcon from '../assets/GamerHobbieIcon';
import DevHobbieIcon from '../assets/DevHobbieIcon';


const SectionHobbies = () => {
    return (
        <section className="hobbies-section">
        <h1>HOBBIES</h1>
        <div className='container-icon-Hobbies'>
            <GuitarHobbieIcon/>
            <MicrophoneHobbieIcon/>
            <BasketHobbieIcon/>
            <GamerHobbieIcon/>
            <DevHobbieIcon/>
        </div>

        </section>
    );
}

export default SectionHobbies