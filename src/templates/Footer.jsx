import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import '../css/App.css';

const Footer = () => {
    return (
        <footer>
            <section>
                <div class="contact">
                    <h3>GET IN TOUCH</h3>
                    <p> If you are interested into my work, please feel free to contact me down below</p>
                    <div class="contact_link">
                        <Link to="/Contact">Contact Me</Link>
                    </div>
                    <div class="contact_icons">
                        <a href="https://github.com/iamdamba" target="_blank"><FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/jordi-ngwebo-damba-0228b0148/" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                    </div>
                </div>
            </section>
            <div class="copyright">
                <p>Copyright © 2020. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
