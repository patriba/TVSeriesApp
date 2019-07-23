import React from 'react';
import * as Router from 'react-router-dom';
import './App.css';
import 'whatwg-fetch';
import { Main } from '../../components/Main';

export class App extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <Router.BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              <Router.Link to="/" style={{ color: '#FFF' }}>
                TV Series List
              </Router.Link>
            </h1>
          </header>
          <Main />
        </div>
      </Router.BrowserRouter>
    );
  }
  componentDidMount = (): void => {};
}

export default App;
