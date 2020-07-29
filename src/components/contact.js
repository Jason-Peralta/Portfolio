import { Layout, Menu, Breadcrumb } from 'antd';
import "./home.css"
import * as React from "react";

const { Header, Content, Footer } = Layout;



export default class contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1">
                            <a href = {"/"}>
                                Jason Peralta
                            </a>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <a href = {"/aboutme"}>
                                About Me
                            </a>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <a href = {"/contact"}>
                                Contact Me
                            </a>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">CONTACT PAGE TEST</div>
                </Content>
            </Layout>
        )
    }}
