import '../styles/Home.css';
import ContactSection from './ContactSection.jsx';
const Home = () => {

    return (
        <div className='Home'>
            <aside className='Home__aside'>
                <ContactSection />
            </aside>
        </div>
    )
}

export default Home;