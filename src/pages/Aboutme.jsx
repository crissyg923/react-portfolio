import Avatar from '../images/Portfolio-avatar.png';

export default function AboutPage() {
    return (
        <div className="container h-100 text-center abouttext">
            <h1>About Me</h1>
            <img src={Avatar} className="avatar"width="300" height="300"/>
            <p>
            As a former fashion designer and recent graduate of Rutgers Full Stack Coding program, I can assist in all aspects
            of your web application needs.  I understand the importance of having a reliable and functional site that has a polished
            UI and stays on brand.         
            </p>
        </div>
    );
}