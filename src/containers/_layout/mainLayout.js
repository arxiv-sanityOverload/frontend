import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import NavigationBar from './_header/header';
import { Switch, Route, withRouter } from "react-router-dom";
import Category from '../category/category'
import Community from '../community/community'
import Contact from '../contact/contact'
import Donate from '../donate/donate'
import Recent from '../recent/recent'

const { Header, Content, Footer } = Layout;

class MainLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <NavigationBar />
        <Content style={{ padding: '50px 50px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>  
              <Route exact path="/category" render={routeProps => {
                return <Category {...routeProps} />;
              }} />
              <Route exact path="/community" render={routeProps => {
                return <Community {...routeProps} />;
              }} />
              <Route exact path="/contact" render={routeProps => {
                return <Contact {...routeProps} />;
              }} />
              <Route exact path="/Donate" render={routeProps => {
                return <Donate {...routeProps} />;
              }} />
              <Route exact path="/recent" render={routeProps => {
                return <Recent {...routeProps} />;
              }} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          arxiv-Sanity
        </Footer>
      </Layout>
    );
  }
}
export default withRouter(MainLayout);