import React from 'react';
import './App.css';
import PageRouter from "./components/PageRouter";
import 'antd/dist/antd.css';

function App() {
  return (
      <div className="App">
        <div id={'page-container'}>
          <div id={'content-wrap'}>
            <div className={"background"} style={{minHeight:"82vh"}}>
              <PageRouter/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
