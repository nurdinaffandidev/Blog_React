import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './CreateBlog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title = "App Component from const";
  // const likes = 100;
  // const person = {name: "John", age: 30};
  // const link = "https://example.com";

  return (
    <Router> {/* BrowserRouter is used to enable routing in the application */}
      <div className="App">
        <Navbar /> 
        <div className="content">
          <Switch> {/* Switch is used to render only one route at any point of time */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <CreateBlog />
            </Route>
            {/* :id is a dynamic segment in the URL, it will match any value and pass it as a prop to BlogDetails component */}
            <Route exact path="/blogs/:id"> 
              {/* BlogDetails component will receive the id as a prop */}
              <BlogDetails />
            </Route>
            <Route path="*"> {/* This will match any other route that is not defined above */}
              <NotFound />
            </Route>
          </Switch> 
          
          {/* Passing dynamic variable */}
          {/* 
          <h1>{ title }</h1>
          <p>Liked: { likes }</p>  
          */}

          {/* Passing object directly not allowed, will result in error */}
          {/* <p>{ person }</p>   */}

          {/* Passing static values */}
          {/* <
          p>{ 10 }</p>
          <p>{ "String" }</p>
          <p>{ [1,2,3,4,5] }</p>
          */}
          
          {/* Passing function */}
          {/* <p>{ Math.random() * 10 }</p> */}

          {/* Passing dynamic variable in html tags' attributes */}
          {/* <a href={ link }>example link</a>  */}
        </div>
      </div>
    </Router>
  );
}

export default App;
