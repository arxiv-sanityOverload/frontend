import React, { Component } from 'react';
import SubCategory from '../categories/subCategory'
import { List, Card } from 'antd';
import TabsCard from '../_layout/_card';
import CardWithTabs from '../_layout/_cardWithTabs';


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

  // componentDidUpdate(prevProps) {
  //   if (this.props.categoryData !== prevProps.categoryData) {
  //     this.setState({
  //       categoryData: prevProps.categoryData,
  //     });
  //   }
  // }

  render() {
    //console.log(this.props.categoryData);
    var data = this.state.categoryData; 
    return (
      <div>
        {/* <SubCategory /> */}
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={data}
          renderItem={item => (
              <List.Item style={{ background: '#fff' }}>
                {/* <TabsCard itemName = {item}/> */}
                <CardWithTabs itemName = {item}/>
              </List.Item>
            )}
        />
      </div>
    );
  }
}

export default Category;