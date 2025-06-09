import './css/blog-details.css';
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./customHooks/useFetch";
import StringUtils from './utility/StringUtils';
import useDelete from './customHooks/useDelete';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
    const { id } = useParams(); // useParams is used to access the dynamic segments in the URL, in this case, the id of the blog post
    const basePath = "http://localhost:8000/blogs/"; // base path for the API endpoint
    // url: `http://localhost:8000/blogs/${id}`
    const { data: blog, isPending, error } = useFetch(basePath + id); // useFetch is a custom hook to fetch data from the API`);
    const handleDeleteClick = useDelete(); // custom hook to handle delete operation
    const history = useHistory(); // useHistory is used to programmatically navigate to a different route
    
    return ( 
        <div className="blog-details">
            { error && 
            <div style={{color: "red"}}>
                <h2 style={{color: "red"}}>Error fetching blog..</h2>
                <Link to="/"><p>Back to home...</p></Link>
            </div>} 
            { isPending && <h2>Loading...</h2> }
            { blog && 
                <article>
                    <h2>{ blog.title }</h2>
                    <p><b>Written by { StringUtils.capitalize(blog.author) }</b></p>
                    <div>{ blog.body }</div>
                    <button onClick={ () => handleDeleteClick(basePath, blog, ()=> {history.push('/')}) }>Delete</button>
                </article>
            }
        </div>
     );
}
 
export default BlogDetails;