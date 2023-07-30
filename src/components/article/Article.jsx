import './article.css';

const Article = ( {imgUrl, date, title, id} ) => {
    return ( 
        <div className='gpt3-blog-container-article' id={id} >
            <div className="gpt3-blog-container-article-image">
                <img src={imgUrl} alt="" />
            </div>
            <div className="gpt3-blog-container-article-content">
                <div>
                    <p> {date} </p>
                    <h3> {title} </h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
     );
}
 
export default Article;