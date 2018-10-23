import * as React from 'react';
import {observer} from 'mobx-react';
import './App.css';
import logo from './logo.svg';
import MyState from './mystate';


const newState = new MyState();
@observer
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React{newState.num}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
