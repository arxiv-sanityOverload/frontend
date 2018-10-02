import React, { Component } from 'react';
import SubCategory from '../categories/subCategory'
import { List, Card, Pagination } from 'antd';
import TabsCard from '../_layout/_card';
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

  // componentDidUpdate(prevProps) {
  //   if (prevProps.categoryData !== this.props.categoryData) {
  //     this.loadContacts();
  //   }
  // }
  

  loadMore = (page, pageSize) => {
    this.setState(prevState => ({
      offset: 10*page,
      // limit: prevState.limit+10,
    }), () => {
        this.props.fetchSubCategory(this.state.primaryCategory, this.state.limit, this.state.offset);
        // this.scrollListener = window.addEventListener('scroll', (e) => {
        //   this.handleScroll(e)
        // })
      }
    );
  }

  // handleScroll = () => {
  //   const { scrolling, totalPages, offset} = this.state
  //   if (scrolling) return
  //   // if (totalPages <= page) return
  //   var pageOffset = window.pageYOffset + window.innerHeight
  //   if (scrolling) {
  //     this.loadMore()
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.categoryData !== prevProps.categoryData) {
  //     this.setState({
  //       categoryData: prevProps.categoryData,
  //     });
  //   }
  // }

  render() {
    var data = this.state.categoryData;
    return (
      <div>
        {data.length !== 0 ?
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
