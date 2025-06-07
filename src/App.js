import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = "App Component from const";
  // const likes = 100;
  // const person = {name: "John", age: 30};
  // const link = "https://example.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        
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
  );
}

export default App;
