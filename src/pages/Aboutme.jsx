import Avatar from '../images/Portfolio-avatar.png';

export default function AboutPage() {
    return (
        <div className="container h-100 text-center abouttext">
            <h1>About Me</h1>
            <img src={Avatar} className="avatar"width="300" height="300"/>
            <p>
            
            With a unique blend of experience in fashion design and a solid foundation from 
            Rutgers' Full Stack Coding program, I bring a versatile skill set to meet all your 
            web application needs. I recognize the significance of a dependable, visually 
            appealing website that aligns seamlessly with your brand. In the realm of web design, 
            the fusion of presentation and functionality is paramount. My meticulous attention to 
            detail, coupled with a passion for crafting memorable user experiences, positions me 
            as the ideal candidate for your web development requirements.          
            </p>
        </div>
    );
}