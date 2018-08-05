import React, { Component } from 'react';
import {BrowserRouter, Link }  from 'react-router-dom';
import { Layout, Menu, Icon,  Breadcrumb, Button } from 'antd';
import CategoryMenu from '../_categoryMenu/categoryMenu';
import CategoryDrawer from '../_categoryMenu/categoryDrawer';

const { Header, Sider, Content, Footer } = Layout;

class NavigationBar extends React.Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
        <Header>
          <div className="logo" />
            <Menu
             theme="dark"
             mode="horizontal"
             defaultSelectedKeys={['1']}
             style={{ lineHeight: '64px' }}
            >
              <Menu.Item>
                <Link to="/category">
                {/* <CategoryMenu />
                  Uncomment this for Category Menu component
                */}
                  <CategoryDrawer />
                </Link>    
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/recent">Recent Uploaded</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/community">Community</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/contact">Contact Us</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/donate">Donate Us</Link>
              </Menu.Item>
          </Menu>
        </Header>    
    );
  }
}

export default NavigationBar;