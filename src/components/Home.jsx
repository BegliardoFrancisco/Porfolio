import '../styles/Home.css';
import ContactSection from './ContactSection.jsx';
import SectionHobbies from './SectionHobbies.jsx';
import SectionLangTools from './SectionLangTools.jsx';

const Home = () => {

    return (
        <div className='Home'>
            <aside className='Home__aside'>
                <ContactSection />
                <SectionLangTools/>
                <SectionHobbies/>
            </aside>
        </div>
    )
}

export default Home;