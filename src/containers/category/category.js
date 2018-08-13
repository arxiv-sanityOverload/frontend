import React, { Component } from 'react';
import SubCategory from '../categories/subCategory'
import { List, Card } from 'antd';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      categoryData: [],
    };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.categoryData !== this.props.categoryData){
      this.setState({
        categoryData: nextProps.categoryData,
      });
    }
  }

  render() {
    console.log(this.state.categoryData);
    let data1 = this.state.categoryData; 
    console.log(data1);
    console.log(data);
    return (
      <div>
        {/* <SubCategory /> */}
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={data1}
          renderItem={item => (
              <List.Item style={{ background: '#fff' }}>
                <Card title={item.title}>{item.abstract}</Card>
              </List.Item>
            )}
        />
      </div>
    );
  }
}

export default Category;