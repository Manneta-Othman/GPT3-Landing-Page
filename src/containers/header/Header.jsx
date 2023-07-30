import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Header = () => {
    return ( 
        <div className='gpt3-header section-padding' id='home'>
            <div className="gpt3-header-content">
                <h1 className="gradient-text">Let's build something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="gpt3-header-content-input">
                    <input type="email" name="" id="" placeholder='Your E-mail Adrress' />
                    <button type='button'>Get Started</button>
                </div>
                <div className="gpt3-header-content-people">
                    <img src={people} alt="people" />
                    <p>1.600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
                <div className="gpt3-header-image">
                    <img src={ai} alt="ai" />
                </div>
        </div>
     );
}
 
export default Header;