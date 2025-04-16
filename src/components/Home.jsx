import '../styles/Home.css';
import '../styles/icon.css'
import ContactSection from './ContactSection.jsx';
import PythonIcon from '../assets/PythonIcon.jsx';
import GoLangIcon from '../assets/GoLangIcon.jsx';
import JavaScriptIcon from '../assets/JavaScriptIcon.jsx';
import HtmlIcon from '../assets/HtmlIcon.jsx';
import JavaIcon from '../assets/JavaIcon.jsx';

const Home = () => {

    return (
        <div className='Home'>
            <aside className='Home__aside'>
                <ContactSection />
                <section className='section_lenguaje_tools'>
                    <h1>LENGUAJES & TOOLS</h1>
                    <div className='Contain_logo'></div>
                    <PythonIcon/>
                    <GoLangIcon/>
                    <JavaScriptIcon/>
                    <HtmlIcon/>
                    <JavaIcon/>
                </section>
            </aside>
        </div>
    )
}

export default Home;