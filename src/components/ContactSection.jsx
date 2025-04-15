import GitHubIcon from '../assets/GithubIcon.jsx';
import MailIcon from '../assets/MailIcon.jsx';
import LinkintIcon from '../assets/LinkintIcon.jsx';
import UbicationIcon from '../assets/UbicationIcon.jsx';
import '../styles/icon.css';	
import '../styles/ContactSection.css';

const ContactSection = () => {
    return (
        <>
        <section className='Contact_section'>
                    <h1>CONTACT</h1>
                    <h2>Francisco Hugo Begliardo</h2>
                    <h3>24 años</h3>
                    <div className='CardContact'>
                        <UbicationIcon />
                        <a href='https://maps.app.goo.gl/QyQNcJ7376VPLypU6'>Cordoba, Cordoba, Argentina</a>
                    </div>
                    <div className='CardContact'>
                        <GitHubIcon />
                        <a href='https://github.com/BegliardoFrancisco'>https://github.com/BegliardoFrancisco</a>
                    </div>
                    <div className='CardContact'>
                        <MailIcon />
                        <a href='mailto:franciscobegliardo@gmail.com'>franciscobegliardo@gmail.com</a>
                    </div>
                    <div className='CardContact'>
                        <LinkintIcon/>
                        <a href='https://www.linkedin.com/in/francisco-begliardo-2a07a2297/'>https://www.linkedin.com/in/francisco-begliardo-2a07a2297/</a>
                    </div>
                </section>
        </>
    )
}
export default ContactSection