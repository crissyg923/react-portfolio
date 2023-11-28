import { Link } from 'react-router-dom';
import Avatar from '../images/Portfolio-avatar.png';


export default function HomePage() {
    return (
        
        <div className="container h-100">
            <div className="container">
               <h1>Crystal, Full Stack Web Developer</h1> 
            </div>
            <div className="container">
            <div className="row">
            <div className="col-sm-8 text-center">
            <h4>Welcome to my portfolio! As a full-stack developer with prior experience in graphic design, I can provide services for all aspects 
            of your web design projects.  Visit <Link to='/Aboutme' className="badge bg-primary rounded-pill">About Me</Link> to learn more about me 
            and my experience.</h4>
            </div>
            <div className="col-sm-4">
            <img className="avatar" src={Avatar} width="400" height="400" />
            </div>
            </div>
            </div>
        </div>

    )
}