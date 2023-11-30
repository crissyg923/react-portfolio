import { Link } from 'react-router-dom';
import Avatar from '../images/Portfolio-avatar.png';
import Arrow from '../images/downarrow.png';




export default function HomePage() {
    return (
        
        <div className="container h-50 homepage">

            <div className="container p-2">
            <div className="row">
            <div className="col-sm-8 hometext">
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
                </div>
            </section>
           
            

            </div>
            <div className="col-sm-4 text-center">
            <img className="avatar" src={Avatar} width="300" height="300" />
            </div>
            </div>
            </div>
           
        </div>

    )
}