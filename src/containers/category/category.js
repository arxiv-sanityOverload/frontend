import React, { Component } from 'react';
import { List, Card, Pagination } from 'antd';
import CardWithTabs from '../_layout/_cardWithTabs';
import { fetchSubCategory } from '../../_actions/action'
import { connect } from 'react-redux';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      categoryData: [],
      limit: 10,
      offset: 10,
      primaryCategory: '',
      scrolling: false,
    };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.categoryData !== this.props.categoryData){
      this.setState({
        categoryData: nextProps.categoryData,
      });
    }
    if(nextProps.primaryCategory !== this.props.primaryCategory){
      this.setState({
        primaryCategory: nextProps.primaryCategory,
      });
    }
  }

  loadMore = (page, pageSize) => {
    this.setState(prevState => ({
      offset: 10*page,
    }), () => {
        this.props.fetchSubCategory(this.state.primaryCategory, this.state.limit, this.state.offset);
      }
    );
  }

  render() {
    var data = this.state.categoryData;
    return (
      <div>
        {data.length !== 0 ?
          <div>
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={data}
              renderItem={(item,key) => (
                  <List.Item style={{ background: '#fff' }}>
                    <CardWithTabs itemName = {item} key={key}/>
                  </List.Item>
                )}
            />
            <Pagination onChange={(page, pageSize) => this.loadMore(page, pageSize)} defaultCurrent={1} total={500} />
          </div>
         : <div></div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { subCategoryReducer: state.subCategoryReducer }
};

const mapDispatchToProps = dispatch => ({
  fetchSubCategory: (primaryCategory, limit, offset) => dispatch(fetchSubCategory(primaryCategory, limit, offset))
 })

export default connect(mapStateToProps, mapDispatchToProps)(Category);
