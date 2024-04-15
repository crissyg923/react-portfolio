
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.css';

export default function Footer() {
    return (
        <div className=" text-center footer">
           <a className="icon "href="https://github.com/crissyg923" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faGithub} size="2x" />
           </a>
           <a className="icon" href="https://www.linkedin.com/in/crystalgreen923/" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faLinkedin} size="2x" />
           </a>
        </div>
    )
}