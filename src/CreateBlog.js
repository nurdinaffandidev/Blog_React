import './css/create-blog.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null); // initialize as null to handle error state
    const history = useHistory(); // hook to programmatically navigate

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        const blog = { title, body, author };
        setError(null); // reset error state before making the request
        setIsPending(true); // set the pending state to true while the request is being processed
        
        // Send a POST request to the server
        setTimeout(() => { // simulate a delay to mimic loading state
            fetch('http://localhost:8000/blogs', { 
                method: 'POST', // specify the HTTP method
                headers: { "Content-Type": "application/json" }, // set the content type to JSON
                body: JSON.stringify(blog) // convert the blog object to a JSON string
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error("Could not fetch the data for that resource");
                }
                return response.json(); // parse the response as JSON
            })
            .then((data) => {
                console.log(`new blog added: ${JSON.stringify(data)}`);
                setIsPending(false); // reset the pending state
                history.push(`/blogs/${data.id}`); // navigate to the newly created blog's details page
                // history.push('/'); // navigate to the home page after successful submission
            })
            .catch((err) => {
                console.error('Error adding blog:', err);
                setError(err.message); // set the error message to state
                setIsPending(false); // reset the pending state in case of an error
            });
        }, 1000); // simulate a delay of 1s to mimic loading state
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
                { error && <div style={{color: "red", marginTop: "50px"}}><h2 style={{color: "red"}}>Failed to submit blog</h2></div> }
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