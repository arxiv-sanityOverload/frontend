import { Card, Tabs } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGithubSearch } from '../../_actions/action'

const TabPane = Tabs.TabPane;

class CardWithTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      githubURL: [],
      checkData: false,
    };
  }

  tabClicked = (key) => {
    if(key === 'Github') {
      this.props.fetchGithubSearch(this.props.itemName.title);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.githubReducer !== this.props.githubReducer){
      this.setState({
        githubURL: nextProps.githubReducer.data.items,
        checkData: true,
      });
    }
  }

  render() {
    return (
      <div>
        <Card>
          <Tabs defaultActiveKey="Title"  onTabClick={this.tabClicked}>
            <TabPane tab="Title" key="Title">
              <p>{this.props.itemName.title}</p>
            </TabPane>

            <TabPane tab="Abstract" key="Abstract">
              <p>{this.props.itemName.abstract}</p>
            </TabPane>

            <TabPane tab="Link" key="Link">
              <p><a href={this.props.itemName.abs_page_link} target="_blank">{this.props.itemName.abs_page_link}</a></p>
            </TabPane>

            <TabPane tab="Other" key="Other">
              <p>
                Arxiv ID : {this.props.itemName.arxiv_id} <br />
                Published on : {this.props.itemName.published}  <br /> 
                Authors : {this.props.itemName.authors} <br />
                Journal reference : {this.props.itemName.journal_ref}
              </p>
            </TabPane>

            <TabPane tab="Download" key="Download">
              <p><a href={this.props.itemName.pdf_link} target="_blank">{this.props.itemName.pdf_link}</a></p> 
            </TabPane>

            <TabPane tab="Similar Papers" key="SimilarPapers">
              <p>Similar</p>
            </TabPane>

            <TabPane tab="Github" key="Github">
              <div>
                { 
                  (this.state.checkData) ? 
                    this.state.githubURL.map((url, index) => {
                    return (
                      <div>
                        Github Link:  <a href={url.clone_url} target="_blank">{url.clone_url}</a> <br />
                        Description : {url.description} <br />
                        Stars : {url.stargazers_count}  <br /> 
                        Fork : {url.forks_count} <br />
                        <hr />
                      </div>);
                  })
                  : <div>No repositories found.</div>
                }
              </div>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { githubReducer: state.githubReducer }
};

const mapDispatchToProps = dispatch => ({
  fetchGithubSearch: (title) => dispatch(fetchGithubSearch(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardWithTabs);