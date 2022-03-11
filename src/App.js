import React from 'react';
import logo from './logo.svg';
import './App.css';
// import '@aws-amplify/ui/dist/styles.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react-v1';
// import { withAuthenticator, AmplifySignOut } from '././node_modules/@aws-amplify';


function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
// export default App;
