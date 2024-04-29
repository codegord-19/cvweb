import '../styles/nav.css'
import CVP from '../img/cvprofile.jpg'


function Nav({ iniRef, skillsRef, sobreRef }){

        const scrollToSection = (ref) => {
            const yOffset = -200; // Altura de tu Nav, cambiar según sea necesario
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
        }

    return(
        <header>
            <div className='title'>
                <i className="fa-solid fa-star st1"></i>
                <div className='nd'>
                    <div className='name'><h2 className='animate__animated animate__zoomIn'>Sebastián Rueda</h2></div>
                    <div className='desc'><p>Web developer<i className="fa-solid fa-code"></i></p><i className="fa-solid fa-laptop-code"></i></div>
                </div>
                <div className='cvph'><img src={CVP} alt=''></img></div>
                <i className="fa-solid fa-star st2"></i>
            </div>
            <ul>
                <button onClick={() => scrollToSection(iniRef)}>Inicio<i class="fa-solid fa-house-user"></i></button>
                <button onClick={() => scrollToSection(skillsRef)}>Skills<i class="fa-solid fa-code"></i></button>
                <button onClick={() => scrollToSection(sobreRef)}>Sobre mi<i class="fa-regular fa-user"></i></button>
            </ul>
        </header>
    );
}

export default Nav;