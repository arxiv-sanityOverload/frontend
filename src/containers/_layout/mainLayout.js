import React from "react";
import { Layout } from 'antd';
import NavigationBar from './_header/header';
import { Switch, Route } from "react-router-dom";
import Category from '../category/category'
import Community from '../community/community'
import Contact from '../contact/contact'
import Donate from '../donate/donate'
import Recent from '../recent/recent'
import { connect } from 'react-redux';

const { Content, Footer } = Layout;

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      categoryData: [],
      primaryCategory: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.subCategoryReducer !== this.props.subCategoryReducer){
      if(nextProps.subCategoryReducer.data.result.length !== 0) {
        this.setState({
          categoryData: nextProps.subCategoryReducer.data.result,
          primaryCategory: nextProps.subCategoryReducer.data.result[0].primary_category,
        })
      }
    }
  }

  render() {
    return (
      <Layout className="layout">
        <NavigationBar />
        <Content style={{ padding: '50px 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>  
              <Route exact path="/category" render={routeProps => {
                return <Category {...routeProps} categoryData = {this.state.categoryData} primaryCategory = {this.state.primaryCategory}/>;
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

const mapStateToProps = (state) => {
  return { subCategoryReducer: state.subCategoryReducer }
};

export default connect(mapStateToProps)(MainLayout);
