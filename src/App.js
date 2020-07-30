import React from 'react';
import './App.css';
import PageRouter from "./components/PageRouter";
import 'antd/dist/antd.css';
import {Menu} from "antd";
import {NavbarBrand} from "react-bootstrap";

function App() {
  return (
      <div className="App">
        <div id={'page-container'}>
          <div id={'content-wrap'}>
            <div className={"background"} style={{minHeight:"82vh"}}>
                <header>
                    <div className="logo" />
                    <Menu style={{
                        border: '1px solid red',
                        backgroundColor:'black',
                        height: 128,
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center'
                    }} theme="dark" mode="horizontal">
                        <Menu.Item key="1" style={{position: 'absolute', top: 0, left: 0, paddingTop: 36 }}>
                            <NavbarBrand href = {"/"}>
                                <b>Jason Peralta</b>
                            </NavbarBrand>
                        </Menu.Item>
                        <Menu.Item key="2" style={leftStyle}>
                            <a href = {"/aboutme"}>
                                About Me
                            </a>
                        </Menu.Item>
                        <Menu.Item key="3" style={leftStyle}>
                            <a href = {"/resume"}>
                                Resume
                            </a>
                        </Menu.Item>
                        <Menu.Item key="4" style={leftStyle}>
                            <a href = {"/contact"}>
                                Contact Me
                            </a>
                        </Menu.Item>
                    </Menu>
                </header>
                <body>
              <PageRouter/>
                </body>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
const leftStyle = { paddingTop: 36,
    border: '1px solid red',};

