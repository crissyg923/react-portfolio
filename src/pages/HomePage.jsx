import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="container">
            Welcome to my portfolio! As a full-stack developer with prior experience in graphic design, I can provide services for all aspects 
            of your web design projects.  Visit <Link to='/Aboutme' className="badge bg-primary rounded-pill">About Me</Link> to learn more about me 
            and my experience.
        </div>
    )
}