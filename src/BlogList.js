
// without destructuring props
// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;

import { Link } from "react-router-dom/cjs/react-router-dom.min"
import StringUtils from "./utility/StringUtils"
import useDelete from "./customHooks/useDelete"

// destructuring props
const BlogList = ({blogs, title}) => {
    const handleDeleteClick = useDelete(); // custom hook to handle delete operation


    return(
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-row" key={blog.id}>
                    <div className="blog-preview" key={ blog.id }>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>Blog { blog.id }: { blog.title }</h2>
                            <p>Written by { StringUtils.capitalize(blog.author) }</p>
                        </Link>
                    </div>
                    <div className="blog-row-delete-button">
                        <button onClick={() => {
                            handleDeleteClick("http://localhost:8000/blogs/", blog, () => {
                                // Callback function to execute after successful deletion
                                window.location.reload(); // reload the page to reflect changes
                                console.log(`Blog with id ${blog.id} deleted successfully`);
                            });
                        }}>delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogList