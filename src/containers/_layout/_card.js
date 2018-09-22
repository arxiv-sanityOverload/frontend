import { Card, Icon } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGithubSearch } from '../../_actions/action'

const tabList = [{
  key: 'Title',
  tab: 'Title',
}, {
  key: 'Abstract',
  tab: 'Abstract',
}, {
  key: 'Link',
  tab: 'Link',
}, {
  key: 'Other',
  tab: 'Other',
}, {
  key: 'Download',
  tab: 'Download',
},{
  key: 'SimilarPapers',
  tab: 'Similar Papers',
}, {
  key: 'Github',
  tab: 'Github',
}
];

class TabsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      key: 'Title',
      githubURL: [],
      checkData: false,
    };
  }

  componentDidMount() {
    this.props.fetchGithubSearch(this.props.itemName.title);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.githubReducer !== this.props.githubReducer){
      console.log(nextProps.githubReducer);
      const promise = Promise.resolve(nextProps.githubReducer);
      promise.then((value) => {
        value.data.then((githubData) => {
          this.setState({
            githubURL: githubData.data.items,
            checkData: true,
          });
        });
      });   
    }
  }

  contentList = {
    Title: <p>{this.props.itemName.title}</p>,
    Abstract: <p>{this.props.itemName.abstract}</p>,
    Link: <p><a href={this.props.itemName.abs_page_link} target="_blank">{this.props.itemName.abs_page_link}</a></p>,
    Other: <p>Arxiv ID : {this.props.itemName.arxiv_id} <br />
              Published on : {this.props.itemName.published}  <br /> 
              Authors : {this.props.itemName.authors} <br />
              Journal reference : {this.props.itemName.journal_ref}
            </p>,
    Download: <p><a href={this.props.itemName.pdf_link} target="_blank">{this.props.itemName.pdf_link}</a></p>,
    SimilarPapers: <p>Similar</p>,
    Github: 
    //    (this.state.checkData) ? this.state.githubData.map((url, index) => {
    //   if(index <= 9)
    //     return(
    //     <div>{url.html_url}</div>
    //   )
    // })
    // : 
    {},
  }

  onTabChange = (key, type) => {
    this.setState({
      [type]: key });
  }

  render() {
    this.contentList.Github = <div>
      { (this.state.checkData) ? this.state.githubURL.map((url, index) => {
      // if(index <= 9)
      //   return(
        <div><a href={url.archive_url} target="_blank">{url.archive_url}</a></div>
      // )
    }) : <div>No repositories found.</div>}</div>;
    return (
      <div>
        <Card
          // style={{ width: '100%' }}
          // title={this.props.itemName.title}
          // extra={<a href="#">More</a>}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={(key) => { this.onTabChange(key, 'key'); }}
          // actions={[
          //   <div>
          //     <span> 56 </span><Icon type="like-o" />
          //   </div>,
          //   <div> 
          //     <span>  4 </span><Icon type="dislike-o" />
          //   </div>,
          //   <Icon type="edit" />,
          //   <Icon type="github" />,
          //  ]}
        >
        {this.contentList[this.state.key]}
        </Card>
        {/* <br /><br /> */}
        {/* <Card
          // style={{ width: '100%' }}
          tabList={similar}
          activeTabKey={this.state.similarKey}
          onTabChange={(key) => { this.onTabChange(key, 'similarKey'); }}
        >
          {this.similarContentList[this.state.similarKey]}
        </Card> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(TabsCard);