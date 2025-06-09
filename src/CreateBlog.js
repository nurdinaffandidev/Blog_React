import './css/create-blog.css';

const CreateBlog = () => {
    return (
        <div className="create-blog">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input type="text" required placeholder="Enter blog title:"/>
                <label>Blog body:</label>
                <textarea required placeholder="Enter your blog here..."></textarea>
                <label>Blog author:</label>
                <select>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
      );
}
 
export default CreateBlog;