import logo from './Image/S3-Bucket.png'
import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports); 
import { Storage } from 'aws-amplify';
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
        const listObjects = async () => {
     try {
       const result = await Storage.list(''); 
       console.log(result);
     } catch (error) {
       console.error('Error listing objects:', error);
     }
   };
       </p>
      </header>
    </div>
  );
}

export default App;
