
// without destructuring props
// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;

// destructuring props
const BlogList = ({blogs, title, handleDeleteBlog}) => {
    return(
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <div className="blog-header">
                        <h2>{ blog.title }</h2>
                        <button>delete</button>
                    </div>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    )
}

export default BlogList