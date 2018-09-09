import { Card, Icon } from 'antd';
import React, { Component } from 'react';

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
},
//  {
//   key: 'Github',
//   tab: 'Github',
// }
];

class TabsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      key: 'Title',
    };
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
    // Github:  <Icon type="github" />
  }

  onTabChange = (key, type) => {
    this.setState({
      [type]: key });
    }

  render() {
    return (
      <div>
        <Card
          // style={{ width: '100%' }}
          // title={this.props.itemName.title}
          // extra={<a href="#">More</a>}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={(key) => { this.onTabChange(key, 'key'); }}
          actions={[
            <div>
              <span> 56 </span><Icon type="like-o" />
            </div>,
            <div> 
              <span>  4 </span><Icon type="dislike-o" />
            </div>,
            <Icon type="edit" />,
            <Icon type="github" />,
           ]}
        >
        {this.contentList[this.state.key]}
        </Card>
      </div>
    );
  }
}

export default TabsCard;