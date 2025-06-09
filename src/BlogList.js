
// without destructuring props
// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;

import { Link } from "react-router-dom/cjs/react-router-dom.min"
import StringUtils from "./utility/StringUtils"

// destructuring props
const BlogList = ({blogs, title, handleDeleteBlog}) => {
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
                        <button onClick={handleDeleteBlog}>delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogList