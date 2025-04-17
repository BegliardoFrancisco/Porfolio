import PythonIcon from '../assets/PythonIcon.jsx';
import GoLangIcon from '../assets/GoLangIcon.jsx';
import JavaScriptIcon from '../assets/JavaScriptIcon.jsx';
import HtmlIcon from '../assets/HtmlIcon.jsx';
import JavaIcon from '../assets/JavaIcon.jsx';

import '../styles/SectionLangTools.css';
import '../styles/icon.css';


const SectionLangTools = () => {

    return (
    <section className='section_lenguaje_tools'>
        <h1>LENGUAJES & TOOLS</h1>
        <div className='Contain_logo'>
            <PythonIcon/>
            <GoLangIcon/>
            <JavaScriptIcon/>
            <HtmlIcon/>
            <JavaIcon/>
            <hr/>
        </div>

    </section>
    )
}

export default SectionLangTools;