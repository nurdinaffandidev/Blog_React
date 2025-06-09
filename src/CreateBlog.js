import { useState } from 'react';
import './css/create-blog.css';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const blog = { title, body, author };

        setIsPending(true); // Set the pending state to true while the request is being processed

        // Send a POST request to the server
        fetch('http://localhost:8000/blogs', { 
            method: 'POST', // Specify the HTTP method
            headers: { "Content-Type": "application/json" }, // Set the content type to JSON
            body: JSON.stringify(blog) // Convert the blog object to a JSON string
        }).then(() => {
            console.log(`new blog added: ${JSON.stringify(blog)}`);
            setIsPending(false); // Reset the pending state
        })
    }

    return (
        <div className="create-blog">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter blog title"
                    value={ title }
                    onChange={ (event) => setTitle(event.target.value) }
                />
                <label>Blog body:</label>
                <textarea 
                    required 
                    placeholder="Enter your blog here..."
                    value={ body }
                    onChange={ (event) => setBody(event.target.value) }
                >
                </textarea>
                <label>Blog author:</label>
                <select 
                    value={ author }
                    onChange={ (event) => setAuthor(event.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled style={{backgroundColor: 'lightGrey'}}>Adding Blog...</button> }
            </form>

            {/* Uncomment the following lines to show onChange effect */}
            {/* <p>{ title }</p>
            <p>{ body }</p>
            <p>{ author }</p> */}
        </div>
      );
}
 
export default CreateBlog;