import '../styles/Home.css';
import '../styles/icon.css';	
import GitHubIcon from '../assets/GithubIcon.jsx';
import MailIcon from '../assets/MailIcon.jsx';
import LinkintIcon from '../assets/LinkintIcon.jsx';

const Home = () => {

    return (
        <div className='Home'>
            <aside className='Home__aside'>
                <section className='Contact_section'>
                    <h1>CONTACT</h1>
                    <h2>Francisco Hugo Begliardo</h2>
                    <h3>24 años</h3>

                    <div className='CardContact'>
                        <GitHubIcon />
                        <a href='https://github.com/BegliardoFrancisco'>https://github.com/BegliardoFrancisco</a>
                    </div>
                    <div className='CardContact'>
                        <MailIcon />
                        <a href='mailto:franciscobegliardo@gmail.com'>franciscobegliardo@gmail.com</a>
                    </div>
                    <div className='CardContact'>
                        <LinkintIcon />
                        <a href='https://www.linkedin.com/in/francisco-begliardo-2a07a2297/'>https://www.linkedin.com/in/francisco-begliardo-2a07a2297/</a>
                    </div>
                </section>
            </aside>
        </div>
    )
}

export default Home;