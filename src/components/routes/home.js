import { Layout, Menu, Breadcrumb } from 'antd';
import "./home.css"
import * as React from "react";
import { Carousel } from 'antd';
import "./carousel.css"
import hamster from './pictures/hamster.gif';
import {NavbarBrand} from "react-bootstrap";
const { Header, Content, Footer } = Layout;



export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="layout">
                <Content style={{ padding: '80px' }}>
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

const leftStyle = { paddingTop: 36 };
