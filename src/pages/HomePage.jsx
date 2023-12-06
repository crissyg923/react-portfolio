import { Link } from 'react-router-dom';
import Avatar from '../images/Portfolio-avatar.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faReact, faJs} from '@fortawesome/free-brands-svg-icons';



export default function HomePage() {
    return (
        
        <div className="container h-50 homepage">

            <div className="container p-2 ">
            <div className="row">
            <div className="col-sm-12 col-md-4 order-sm-1 order-md-2 text-center">
            <img className="avatar" src={Avatar} width="300" height="300" />
            </div>
            <div className="col-sm-12 col-md-8 order-sm-2 order-md-1 hometext">
            <h1 className="homeheading"><span className="crystal">Crystal,</span> Full Stack Web Developer</h1> 
            <h4 className="hometext">Welcome to my portfolio! As a <span className="homespan">full-stack developer</span> with prior experience in graphic design, I can provide services for all aspects 
            of your web design projects. 
            <span className="resumebutton">
                <Link to="/resume">
                    <button className="innerbutton">View Resume</button>
                </Link>
            </span> 
            </h4>
            <section>
                <div className="text-center technologies">
                    <h5 className="techtext">Known Technologies:</h5>
                    <FontAwesomeIcon icon={faReact} size="2x" />
                    <FontAwesomeIcon icon={faJs} size="2x"/>
                </div>
            </section>
           
            

            </div>
            
            </div>
            </div>
           
        </div>

    )
}