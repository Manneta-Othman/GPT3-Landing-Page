import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
    return ( 
        <div className='gpt3-brand section-padding'>
            <div>
                <img src={google} alt="" />
            </div>
            <div>
                <img src={slack} alt="" />
            </div>
            <div>
                <img src={atlassian} alt="" />
            </div>
            <div>
                <img src={dropbox} alt="" />
            </div>
            <div>
                <img src={shopify} alt="" />
            </div>
        </div>
     );
}
 
export default Brand;