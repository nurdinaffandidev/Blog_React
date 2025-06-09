import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oops..</h2>
            <p>That page cannot be found</p>
            <Link to="/"><p style={{marginTop:"30px"}}>Back to the homepage...</p></Link>
        </div>
     );
}
 
export default NotFound;