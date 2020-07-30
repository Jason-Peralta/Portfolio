import { Layout, Menu, Breadcrumb } from 'antd';
import * as React from "react";
import {NavbarBrand} from "react-bootstrap";

const { Header, Content, Footer } = Layout;



export default class about extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="layout">
                <Header>
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
                </Header>
                <Content>

                    <div className="site-layout-content">RESUME PAGE TEST</div>
                </Content>
            </Layout>
        )
    }}

const leftStyle = { paddingTop: 36 };
