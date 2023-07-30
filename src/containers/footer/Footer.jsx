import './footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
    return ( 
        <div className='gpt3-footer section-padding'>
            <div className="gpt3-footer-heading">
                <h1 className="gradient-text">Do you want to step into the future before others.</h1>
            </div>
            <div className="gpt3-footer-button">
                <p>Request Early Access</p>
            </div>
            <div className="gpt3-footer-links">
                <div className="gpt3-footer-links-logo">
                    <a href="#home"><img src={gpt3Logo} alt="logo" /></a>
                    <p>Crechterwoord K12 182 DK Alknjkcb, <br/>All Rights Reserved.</p>
                </div>
                <div className="gpt3-footer-links-div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3-footer-links-div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3-footer-links-div">
                    <h4>Get in touch</h4>
                    <p>Othman Manneta</p>
                    <p>+212649932423</p>
                    <p>othman.manneta@gmail.com</p>
                </div>
            </div>
            <div className="gpt3-footer-copyright">
                <p>© 2023 GPT-3. All rights reserved.</p>
            </div>
        </div>
     );
}
 
export default Footer;