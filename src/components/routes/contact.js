import { Layout, Menu, Breadcrumb } from 'antd';
import * as React from "react";
import {NavbarBrand} from "react-bootstrap";

const { Header, Content, Footer } = Layout;



export default class contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="layout">
                <Content>

                    <div className="site-layout-content">RESUME PAGE TEST</div>
                </Content>
            </Layout>
        )
    }}

const leftStyle = { paddingTop: 36 };
