import logo from './Image/S3-Bucket.png'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h>Bucket List cat NaN</h>
        <a
          className="App-link"
          href="https://us-east-1.console.aws.amazon.com/s3/home?region=us-east-1#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> 
       </p>
      </header>
    </div>
  );
}

export default App;
