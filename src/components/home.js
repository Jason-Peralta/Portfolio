import { Layout, Menu, Breadcrumb } from 'antd';
import "./home.css"
import * as React from "react";
import { Carousel } from 'antd';
import "./carousel.css"
import hamster from './pictures/hamster.gif';
const { Header, Content, Footer } = Layout;



export default class Home extends React.Component {
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
                        <a href = {"/resume"}>
                           Resume
                        </a>
                    </Menu.Item>
                        <Menu.Item key="4">
                            <a href = {"/contact"}>
                                Contact Me
                            </a>
                        </Menu.Item>

                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Carousel autoplay>
                        <div>
                            <img src={hamster} alt="Hamster" />;
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </Content>
            </Layout>
        )
    }}
