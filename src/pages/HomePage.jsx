import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import Avatar from '../images/Portfolio-avatar.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faReact, faJs} from '@fortawesome/free-brands-svg-icons';

import MysqlIcon from '../images/icons/mysql.svg';
import NodeIcon from '../images/icons/node.svg';
import HandlebarsIcon from '../images/icons/handlebars.svg';
import CSSIcon from '../images/icons/css.svg';


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
                <div className="text-center technologies d-flex justify-content-center flex-column">
                    <h5 className="techtext">Highlighted Skills:</h5>
                <div className="d-flex flex-row justify-content-center">
                    <div className="p-2">
                    <FontAwesomeIcon icon={faReact} size="4x" />
                    </div>
                    <div className="p-2">
                    <FontAwesomeIcon icon={faJs} size="4x"/>
                    </div>
                    <div className="p-2">
                    <ReactSVG src={MysqlIcon} style={{ width: '75px', height: '75px' }} />
                    </div>
                    <div className="p-2">
                    <ReactSVG src={NodeIcon} style={{ width: '75px', height: '75px' }} />
                    </div>
                    <div className="p-2">
                    <ReactSVG src={HandlebarsIcon} style={{ width: '75px', height: '75px' }} />
                    </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                    <div className="p-2">
                    <h3>Express</h3>
                    </div>
                    <div className="p-2">
                    <h3>mongoDB</h3>
                    </div>
                    <div className="p-2">
                    <h3>MERN</h3>
                    </div>
            
                    </div>
                </div>
            </section>
           
            

            </div>
            
            </div>
            </div>
           
        </div>

    )
}