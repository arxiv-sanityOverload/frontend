import { Card, Icon, Tabs } from 'antd';
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
      fetch(`https://api.github.com/search/repositories?q=${this.props.itemName.title}&sort=stars&order=desc`)
      .then(response => 
        response.json())
      .then(
        data => {
          if(data.total_count !== 0) {
            this.setState({
              githubURL: data,
              checkData: true,
            });
          }
        }
      );
      // this.props.fetchGithubSearch(this.props.itemName.title); // Uncomment and comment fetch code to use redux code.
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.githubReducer !== this.props.githubReducer){
  //     const promise = Promise.resolve(nextProps.githubReducer);
  //     promise.then(value => {
  //       value.data.then((githubData) => {
  //         if(githubData.data.total_count !== 0) {
  //           this.setState({
  //             githubURL: githubData.data.items,
  //             checkData: true,
  //           });
  //         }
  //       });
  //     });   
  //   }
  // } // Uncomment to correct the redux usage : Now all the cards got updated with the state data instead of just one.

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
                    this.state.githubURL.items.map((url, index) => {   // Change to this.state.githubURL.map when using Redux to correct it.
                    return (
                      <div>
                        Github Link:  <a href={url.clone_url} target="_blank">{url.clone_url}</a>
                        Description : {url.description} <br />
                        Stars : {url.stargazers_count}  <br /> 
                        Fork : {url.forks_count} <br />
                        SSH URL : {url.ssh_url}
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