import './css/blog-details.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./customHooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams(); // useParams is used to access the dynamic segments in the URL, in this case, the id of the blog post
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);

    return ( 
        <div className="blog-details">
            { error && <div style={{color: "red"}}><h2 style={{color: "red"}}>Error fetching blog..</h2></div>} 
            { isPending && <h2>Loading...</h2> }
            { blog && 
                <article>
                    <h2>{ blog.title }</h2>
                    <p><b>Written by { blog.author }</b></p>
                    <div>{ blog.body }</div>
                </article>
            }
        </div>
     );
}
 
export default BlogDetails;