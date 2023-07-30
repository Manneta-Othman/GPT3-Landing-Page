import './blog.css';
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from '../../components/brand/imports'


const article = [
    {
        img: blog01,
        date: 'Aug 5, 2023',
        title: 'GPT-3 and Open  AI is the future; Let us exlore how it is?'
    },
    {
        img: blog02,
        date: 'Sep 15, 2023',
        title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
        img: blog03,
        date: 'Jan 1, 2023',
        title: 'GPT-3 and Open  AI is the future; Let us exlore how it is?'
    },
    {
        img: blog04,
        date: 'Oct 19, 2023',
        title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
        img: blog05,
        date: 'Jun 22, 2023',
        title: 'GPT-3 and Open  AI is the future; Let us exlore how it is?'
    }
]

const Blog = () => {
    return ( 
        <div className='gpt3-blog section-padding' id='blog'>
            <div className="gpt3-blog-heading">
                <h1 className="gradient-text">A lot is happening, We are blogging about it.</h1>
            </div>
            <div className="gpt3-blog-container">
                {article.map((item, index) => (
                    <Article imgUrl={item.img} date={item.date} title={item.title} id={'blog' + (index+1)} />
                ))}
            </div>
        </div>
     );
}
 
export default Blog;