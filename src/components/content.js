import '../styles/content.css'
import '../styles/minicube.css'
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LaserBg from './laserbg';
import 'animate.css';
import React, { useRef } from 'react';



function Content({ iniRef, skillsRef, sobreRef, }){
     return (
        <div className='content'>
            <section ref={iniRef}>
                <div className='saludo'>
                    <h2 className='hola'>¡Hola!</h2>
                    <i class="fa-solid fa-hands-clapping"></i>
                </div>
                <LaserBg containerRef={iniRef} />
                <div className='contini'>
                    <div className='description' >
                        <p>
                        Soy un desarrollador web proactivo y creativo, especializado en crear soluciones web dinámicas e innovadoras. Gracias a mi enfoque analítico, mejoro continuamente la experiencia del usuario y la eficiencia operativa. Me distingo por mi puntualidad, excelentes habilidades de comunicación y la capacidad para trabajar de manera eficaz tanto solo como en equipo. Dedicado al aprendizaje continuo y a la excelencia técnica, estoy en busca de oportunidades para aportar valor y crecer profesionalmente en el desarrollo web.
                        </p>
                        <div className='download'>
                            <a href={`${process.env.PUBLIC_URL}/CVSebastianRueda.pdf`} download="CVSebastianrueda">
                                Descargar CV
                                <i class="fa-regular fa-circle-down"></i>
                            </a>
                        </div>
                    </div>
                    <div className='card1'>
                        <div className='cd'>
                            <h2 className='animate__animated animate__fadeInDown animate__delay-1s'>Creatividad</h2>
                            <EmojiObjectsOutlinedIcon className='creativeicon' />      
                        </div>
                        <div className='cd'>
                            <h2 className='animate__animated animate__fadeInDown animate__delay-2s'>Eficiencia</h2>
                            <TaskAltIcon className='eficienticon' />
                            <p></p>
                        </div>
                        <div className='cd'>
                            <h2 className='animate__animated animate__fadeInDown animate__delay-3s'>Profesionalismo</h2>
                            <VerifiedUserIcon className='proficon' />
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={skillsRef} className='skillsc'>
                <div className='skc1'></div>
                <div className='skc2'>
                    <h2>SKILLS <i class="fa-solid fa-bolt"></i></h2>
                    <div className='skcont'>
                        <ul>
                            <li>
                                <i class="fa-regular fa-circle-check"></i>
                                HTML
                                <div className="cube">
                                <div className="top" style={{ '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-html5"></i>
                                </div>
                                <div>
                                    <span style={{ '--i': 0, '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-html5"></i>
                                    </span>
                                    <span style={{ '--i': 1, '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-html5"></i>
                                    </span>
                                    <span style={{ '--i': 2, '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-html5"></i>
                                    </span>
                                    <span style={{ '--i': 3, '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-html5"></i>
                                    </span>
                                </div>
                                </div>
                            </li>
                            <li>
                                <i class="fa-regular fa-circle-check"></i>
                                Css
                                <div className="cube">
                                <div className="top" style={{ '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-css3-alt"></i>
                                </div>
                                <div>
                                    <span style={{ '--i': 0, '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-css3-alt"></i>
                                    </span>
                                    <span style={{ '--i': 1, '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-css3-alt"></i>
                                    </span>
                                    <span style={{ '--i': 2, '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-css3-alt"></i>
                                    </span>
                                    <span style={{ '--i': 3, '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-css3-alt"></i>
                                    </span>
                                </div>
                                </div>
                            </li>
                            <li>
                                <i class="fa-regular fa-circle-check"></i>
                                JavaScript
                                <div className="cube">
                                <div className="top" style={{ '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-js"></i>
                                </div>
                                <div>
                                    <span style={{ '--i': 0, '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-js"></i>
                                    </span>
                                    <span style={{ '--i': 1, '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-js"></i>
                                    </span>
                                    <span style={{ '--i': 2, '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-js"></i>
                                    </span>
                                    <span style={{ '--i': 3, '--clr': '#FFF80D' }}>
                                    <i class="fa-brands fa-js"></i>
                                    </span>
                                </div>
                                </div>
                            </li>
                            <li>
                                <i class="fa-regular fa-circle-check"></i>
                                Figma
                                <div className="cube">
                                <div className="top" style={{ '--clr': '#FF0DE2' }}>
                                    <i class="fa-brands fa-figma"></i>
                                </div>
                                <div>
                                    <span style={{ '--i': 0, '--clr': '#FF0DE2' }}>
                                    <i class="fa-brands fa-figma"></i>
                                    </span>
                                    <span style={{ '--i': 1, '--clr': '#FF0DE2' }}>
                                    <i class="fa-brands fa-figma"></i>
                                    </span>
                                    <span style={{ '--i': 2, '--clr': '#FF0DE2' }}>
                                    <i class="fa-brands fa-figma"></i>
                                    </span>
                                    <span style={{ '--i': 3, '--clr': '#FF0DE2' }}>
                                    <i class="fa-brands fa-figma"></i>
                                    </span>
                                </div>
                                </div>
                            </li>
                            <li>
                                <i class="fa-regular fa-circle-check"></i>
                                React
                                <div className="cube">
                                <div className="top" style={{ '--clr': '#B2FF0D' }}>
                                    <i class="fa-brands fa-react"></i>
                                </div>
                                <div>
                                    <span style={{ '--i': 0, '--clr': '#B2FF0D' }}>
                                    <i class="fa-brands fa-react"></i>
                                    </span>
                                    <span style={{ '--i': 1, '--clr': '#B2FF0D' }}>
                                    <i class="fa-brands fa-react"></i>
                                    </span>
                                    <span style={{ '--i': 2, '--clr': '#B2FF0D' }}>
                                    <i class="fa-brands fa-react"></i>
                                    </span>
                                    <span style={{ '--i': 3, '--clr': '#B2FF0D' }}>
                                    <i class="fa-brands fa-react"></i>
                                    </span>
                                </div>
                                </div>
                            </li>
                            <li>
                                <i class="fa-regular fa-circle-check"></i>
                                TypeScript
                                <div className="cube">
                                <div className="top" style={{ '--clr': '#B2FF0D' }}>
                                    <p>TS</p>
                                </div>
                                <div>
                                    <span style={{ '--i': 0, '--clr': '#B2FF0D' }}>
                                    <p>TS</p>
                                    </span>
                                    <span style={{ '--i': 1, '--clr': '#B2FF0D' }}>
                                    <p>TS</p>
                                    </span>
                                    <span style={{ '--i': 2, '--clr': '#B2FF0D' }}>
                                    <p>TS</p>
                                    </span>
                                    <span style={{ '--i': 3, '--clr': '#B2FF0D' }}>
                                    <p>TS</p>
                                    </span>
                                </div>
                                </div>
                            </li>
                            <li>
                                <i class="fa-regular fa-circle-check"></i>
                                JSX
                                <div className="cube">
                                <div className="top" style={{ '--clr': '#B2FF0D' }}>
                                    <p>JSX</p>
                                </div>
                                <div>
                                    <span style={{ '--i': 0, '--clr': '#B2FF0D' }}>
                                    <p>JSX</p>
                                    </span>
                                    <span style={{ '--i': 1, '--clr': '#B2FF0D' }}>
                                    <p>JSX</p>
                                    </span>
                                    <span style={{ '--i': 2, '--clr': '#B2FF0D' }}>
                                    <p>JSX</p>
                                    </span>
                                    <span style={{ '--i': 3, '--clr': '#B2FF0D' }}>
                                    <p>JSX</p>
                                    </span>
                                </div>
                                </div>
                            </li>
                            <li>
                                <i class="fa-regular fa-circle-check"></i>
                                Node.js
                                <div className="cube">
                                <div className="top" style={{ '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-node-js"></i>
                                </div>
                                <div>
                                    <span style={{ '--i': 0, '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-node-js"></i>
                                    </span>
                                    <span style={{ '--i': 1, '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-node-js"></i>
                                    </span>
                                    <span style={{ '--i': 2, '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-node-js"></i>
                                    </span>
                                    <span style={{ '--i': 3, '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-node-js"></i>
                                    </span>
                                </div>
                                </div>
                            </li>
                            <li>
                                <i class="fa-regular fa-circle-check"></i>
                                Express.js
                                <div className="cube">
                                <div className="top" style={{ '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-node-js"></i>
                                </div>
                                <div>
                                    <span style={{ '--i': 0, '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-node-js"></i>
                                    </span>
                                    <span style={{ '--i': 1, '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-node-js"></i>
                                    </span>
                                    <span style={{ '--i': 2, '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-node-js"></i>
                                    </span>
                                    <span style={{ '--i': 3, '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-node-js"></i>
                                    </span>
                                </div>
                                </div>
                            </li>
                            <li>
                                <i class="fa-regular fa-circle-check"></i>
                                MongoDB
                                <div className="cube">
                                <div className="top" style={{ '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-envira"></i>
                                </div>
                                <div>
                                    <span style={{ '--i': 0, '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-envira"></i>
                                    </span>
                                    <span style={{ '--i': 1, '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-envira"></i>
                                    </span>
                                    <span style={{ '--i': 2, '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-envira"></i>
                                    </span>
                                    <span style={{ '--i': 3, '--clr': '#C00DFF' }}>
                                    <i class="fa-brands fa-envira"></i>
                                    </span>
                                </div>
                                </div>
                            </li>
                            <li>
                                <i class="fa-regular fa-circle-check"></i>
                                Git & GiutHub
                                <div className="cube">
                                <div className="top" style={{ '--clr': '#FF0DE2' }}>
                                    <i class="fa-brands fa-github"></i>
                                </div>
                                <div>
                                    <span style={{ '--i': 0, '--clr': '#FF0DE2' }}>
                                    <i class="fa-brands fa-github"></i>
                                    </span>
                                    <span style={{ '--i': 1, '--clr': '#FF0DE2' }}>
                                    <i class="fa-brands fa-github"></i>
                                    </span>
                                    <span style={{ '--i': 2, '--clr': '#FF0DE2' }}>
                                    <i class="fa-brands fa-github"></i>
                                    </span>
                                    <span style={{ '--i': 3, '--clr': '#FF0DE2' }}>
                                    <i class="fa-brands fa-github"></i>
                                    </span>
                                </div>
                                </div>
                            </li>
                        </ul>
                        <div className='isometric'>
                            <ul>
                                <li style={{ '--i': -5, '--clr': '#FFF80D' }} data-text="HTML"><i class="fa-brands fa-html5"></i>HTML</li>
                                <li style={{ '--i': -4, '--clr': '#FFF80D' }} data-text="CSS"><i class="fa-brands fa-css3-alt"></i>CSS</li>
                                <li style={{ '--i': -3, '--clr': '#FFF80D' }} data-text="JavaScript"><i class="fa-brands fa-js"></i>JavaScript</li>
                                <li style={{ '--i': -2, '--clr': '#FF0DE2' }} data-text="Figma"><i class="fa-brands fa-figma"></i>Figma</li>
                                <li style={{ '--i': -1, '--clr': '#B2FF0D' }} data-text="React"><i class="fa-brands fa-react"></i>React</li>
                                <li style={{ '--i': 0, '--clr': '#B2FF0D' }} data-text="JSX"><p>JSX</p>JSX</li>
                                <li style={{ '--i': 1, '--clr': '#B2FF0D' }} data-text="TypeScript"><p>TS</p>TS</li>
                                <li style={{ '--i': 2, '--clr': '#fff' }} data-text="Node.js"><i class="fa-brands fa-node-js"></i>Node.JS</li>
                                <li style={{ '--i': 3, '--clr': '#FFF' }} data-text="Express.js"><i class="fa-brands fa-node-js"></i>Express.js</li>
                                <li style={{ '--i': 4, '--clr': '#FFF' }} data-text="MongoDB"><i class="fa-brands fa-envira"></i>MongoDB</li>
                                <li style={{ '--i': 5, '--clr': '#FF0DE2' }} data-text="Git"><i class="fa-brands fa-github"></i>GitHub</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={sobreRef} className='aboutme'>
                <h2>Sobre mi <i class="fa-regular fa-address-card"></i></h2>
                <div className='cards'>
                    <div className='card-a'>
                        <h2 className='contact-h2'>Contacto</h2>
                        <div className='contactinf'>
                            <p><i class="fa-brands fa-whatsapp"></i>3168593766</p>
                            <p><i class="fa-regular fa-envelope"></i>ingsebastianrueda@hotmail.com</p>
                            <p><i class="fa-solid fa-location-dot"></i>Colombia</p>
                            <p><i class="fa-solid fa-baby"></i>19/07/1992</p>                
                        </div>
                    </div>
                    <div className='card-a'>
                        <h2 className='contact-h2'>Educación</h2>
                        <div className='eduinf'>
                            <div>
                                <h3>Ingeniero Industrial</h3>
                                <p>Universidad Santo Tómas - 2013.</p>
                            </div>
                            <div>
                                <h3>Especialista en Gestión Ambiental</h3>
                                <p>Escuela Tecnológica del oritente - 2015.</p>
                            </div>
                            <div>
                                <h3>Magister en Tic para Educación.</h3>
                                <p>Universidad de investigación y desarrollo (UDI) - 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-a'>
                        <h2 className='contact-h2'>Proyectos</h2>
                        <div className='proyinf'>
                            <i class="fa-solid fa-list-check"></i>
                            <p>Aplicación web académica, desarrollada con React.js que cuenta con múltiples funcionalidades como la gestión de notas y descarga de reportes, con una interfaz moderna y  fácil de usar.</p>
                            <a>LINK<i class="fa-solid fa-link"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Content;