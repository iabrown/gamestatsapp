import React from 'react';
import logo from './logo.svg';
import './App.css';
// import '@aws-amplify/ui/dist/styles.css';
import * as Amplify from '@aws-amplify/ui-react-v1';
import {withAuthenticator} from '@aws-amplify/ui-react-v1'

// import {Amplify } from 'aws-amplify';
// import {withAuthenticator} from '@aws-amplify/ui-react';
// import * as Amplify from '@aws-amplify/ui-react-v1';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
// export default App;
