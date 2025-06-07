// custom hook to fetch data from an API
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    // --- to simulate loading, apply setTimeout() ---
    const [data, setData] = useState(null); // initialize as null to handle loading state
    const [isPending, setIsPending] = useState(true); // initialize as true to handle loading state
    const [error, setError] = useState(null); // initialize as null to handle error state

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw Error("Could not fetch the data for that resource");
                }
                return response.json();
            })
            .then(data => {
                setError(null); // reset error state before setting blogs
                setData(data);
                setIsPending(false); // set isPending to false after data is fetched
            })
            .catch(err => {
                console.error(err);
                console.log(err.message);
                setError(err.message); // set error message to state
                setIsPending(false); // set isPending to false after error
            });
        }, 1000);
    }, [url]); // dependency array to re-run effect when url changes

    return { data, isPending, error };
    // -----------------------------
}

export default useFetch;