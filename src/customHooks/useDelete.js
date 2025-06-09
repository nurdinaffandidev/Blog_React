import { useHistory } from 'react-router-dom';

const useDelete = () => {
    const history = useHistory();

    const handleDelete = (url, blog, onSuccess) => {
        fetch((url + blog.id), {
            method: 'DELETE', // specify the HTTP method as DELETE
        })
        .then((response) => {
            if (!response.ok) {
                throw Error("Could not delete the blog post");
            }
            console.log(`Blog deleted successfully: ${JSON.stringify(blog)}`);
            if (onSuccess) {
                onSuccess(); // call the onSuccess callback if provided
            }
        })
        .catch((err) => {
            console.error('Error deleting blog:', err);
            alert(err.message); // alert the user in case of an error
        });
    };
    return handleDelete;
};

export default useDelete;