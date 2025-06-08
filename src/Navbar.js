import { Link } from 'react-router-dom';

/*
    - ahref: navigates between pages by sending a fresh request to the server for a new page ie. (reloading the entire page).
    - Link:  navigate between pages (routes) without reloading the entire page.
 */


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* Using <a> to navigate between pages */}
                {/* <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a> */}

                {/* Using Link component from react-router-dom to navigate between pages */}
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</Link> 
            </div>
        </nav>
     );
}
 
export default Navbar;