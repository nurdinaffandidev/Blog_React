import { useState, useEffect, use } from "react"
import BlogList from './BlogList'
import useFetch from "./useFetch"

const Home = () => {

    const handleClick = () => {
        console.log("Hello, User!")
    }

    // const handleClick = (eventObject) => {
    //     console.log("Hello, User!", eventObject)
    // }

    const handleClickWithArgument = (name, eventObject) => {
        console.log("Hello " + name + "!")
        console.log(eventObject.target);
    }

    /**
     * Note: useState is a hook that allows us to add state to functional components in React.
     * - It returns an array with two elements: the current state value and a function to update it.
     * - The first element is the current state value, and the second element is a function that can be used to update the state value.
     * - The state variable 'name' will be used to display the name in the component and can be changed using the 'setName' function.
     * 
     * Note: When we call setName, it will trigger a re-render of the component with the new state value.
     * 
     * Note: Below is known as array destructuring in JavaScript, where we are extracting the two elements from the array returned by useState.
     * ```    
     *      const [name, setName] = ....
     * ```
     */

    // let name = "Mario"; // this is a variable, not a state variable, it is not reactive and will not cause re-rendering of the component when changed
    
    const [name, setName] = useState("Mario"); // this is a state variable, it is reactive and will cause re-rendering of the component when changed
    const [isMario, setIsMario] = useState(true);
    const [age, setAge] = useState(25);
    
    const handleChangeName = () => {
        const nextIsMario = !isMario;
        setIsMario(nextIsMario);
        console.log("isMario: ", nextIsMario);
        setName(nextIsMario ? "Mario" : "Luigi");
        setAge(nextIsMario ? 25 : 30);
    }
    
    /**
     * Note: React setState functions like setIsMario() and setName() are asynchronous — they schedule a change, but the state isn't updated immediately. 
     * That's why you can't rely on isMario having changed immediately after calling setIsMario().
     * ```
            const toggleName = () => {
                setIsMario(prev => !prev); // toggle true/false
            };
            
            const handleChangeName = () => {
                console.log("Name: " + name);
                toggleName(); // toggle the name
                isMario ? setName("Mario") : setName("Luigi");
                console.log("Name: " + name);
            }
     * ````     
     * 
     */

    // --- hardcoded blogs data ---
    // Note: this is just an example of how to use useState with hardcoded data, in practice we would fetch data from an API
    // const [blogs, setBlogs] =  useState([
    //     { title: "Blog 1: My new website", body: "This is the first blog. Lorem ipsum...", author: "Mario", id: 1 },
    //     { title: "Blog 2: Welcome party!", body: "This is the second blog. Lorem ipsum...", author: "Luigi", id: 2 },
    //     { title: "Blog 3: Web dev top tips", body: "This is the third blog. Lorem ipsum...", author: "Mario", id: 3 }
    // ]);
    // ----------------------------

    /**
     * Note: we can pass in data into external components in the form of props
     * - make blog list component more re-usable
     * - allows to still blogs data in the home component if needed in future
     * - we can pass functions as props
     */

    {/* --- with hardcoded blogs data --- */}
    // const handleDeleteBlog = (id) => {
    //     const remainingBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(remainingBlogs);
    // }

    /**
     * Note: useEffect is a hook that allows us to perform side effects in functional components.
     * - It runs a function on every render of the component and can be used for tasks like data fetching, subscriptions, or manually changing the DOM.
     * - It takes a function as its first argument, which is executed after the component renders.
     * - You can also pass a second argument, an array of dependencies, to control when the effect runs.
     * 
     */

    useEffect(() => {
        console.log("useEffect ran")
    },[name]); // empty array means it runs only once after the initial render, similar to componentDidMount in class components
               // with [name] as a dependency, it runs only when 'name' changes, similar to componentDidUpdate in class components

    // --- fetching blogs data ---
    // Note: useFetch is a custom hook that we created to fetch data from an API
    const { data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    // -----------------------------
    

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            {/* 
                Do not add '()' after function name in onClick, as it will auto invoke the function on page display/refresh
                eg.  <button onClick={ handleClick() }>click me</button>
             */}
             <div className="inline-container">
                <button onClick={ handleClick }>click me</button>
                <div>calling a function in onClick (see console log)</div>
             </div>
            
            {/* 
                functions with args require anonymous function to prevent auto invoke with '()' on page display/refresh 
                eg.  <button onClick={ handleClickAgain("Mario") }>click me</button>
            */}
            <div className="inline-container">
                {/*  Note: When an event occurs, we automatically get an event object */}
                <button onClick={ (eventObject) => handleClickWithArgument("Mario", eventObject) }>click me</button>
                <div>calling a function with arguments (see console log)</div>
            </div>

            <div className="inline-container">
                {/*  Note: When an event occurs, we automatically get an event object */}
                <button onClick={ handleChangeName }>click me</button>
                <div>{ name } is  { age } years old</div>
            </div>

            {/* Iterate through array and create template */}
            {/* --- with hardcoded blogs data --- */}
            {/* <BlogList blogs={blogs} title="All Blogs:" handleDeleteBlog={handleDeleteBlog}/>
            <BlogList blogs={blogs.filter((blog) => blog.author.toLowerCase() === "mario")} 
                      title="Mario's Blogs:"
                      handleDeleteBlog={handleDeleteBlog}/> */}
            
            {/* --- with fetching blogs data, --- */} 
            {/*
                requires conditional template rendering to avoid errors when blogs is null
                Note: blogs is null initially, so we need to check if blogs is not null before rendering BlogList
                    - we can also use optional chaining (blogs?.length) to check if blogs is not null and has length
                    - we can also use a ternary operator to conditionally render the BlogList component
                    eg. {blogs ? <BlogList blogs={blogs} title="All Blogs:" handleDeleteBlog={handleDeleteBlog}/> : <div>Loading...</div>}
            */}
            {error && <div style={{color: "red", marginTop: "50px"}}><h2 style={{color: "red"}}>{ error } blogs</h2></div>}
            {isPending && <div style={{marginTop: "50px"}}><h2>Loading...</h2></div>}
            {error === null && blogs && <BlogList blogs={blogs} title="All Blogs:" handleDeleteBlog={() => console.log("delete pressed")}/>}
            {error === null && blogs && <BlogList blogs={blogs.filter((blog) => blog.author.toLowerCase() === "mario")} 
                                         title="Mario's Blogs:" handleDeleteBlog={() => console.log("delete pressed")}/>}
            
        </div>
     );
}
 
export default Home;