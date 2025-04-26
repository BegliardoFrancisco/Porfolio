import '../styles/Home.css';
import ContactSection from './ContactSection.jsx';
import SectionHobbies from './SectionHobbies.jsx';
import SectionLangTools from './SectionLangTools.jsx';
import SectionProjects from './SectionProjects.jsx';    
import SectionStudy from "./SectionStudy.jsx"
const Home = () => {
    
    return (
        <main>
            <aside className='Home__aside'>
                <ContactSection />
                <SectionLangTools/>
                <SectionHobbies/>
            </aside>

            <section className='Home'>
                <SectionProjects/>
                <SectionStudy/>
            </section>


        </main>
    )
}

export default Home;
