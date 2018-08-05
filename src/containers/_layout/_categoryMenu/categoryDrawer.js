import { Drawer, Button, Menu, Icon } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubCategory } from '../../../_actions/action'

const SubMenu = Menu.SubMenu;

const dataSource = [
  {
    type: 'Astrophysics',
    collapsed: false,
    code: 'astro-ph',
    sub: [
      {name: 'Cosmology and Nongalactic Astrophysics', code: 'astro-ph.CO', collapsed: false},
      {name: 'Earth and Planetary Astrophysics', code: 'astro-ph.EP', collapsed: false},
      {name: 'Astrophysics of Galaxies', code: 'astro-ph.GA', collapsed: false},
      {name: 'High Energy Astrophysical Phenomena', code: 'astro-ph.HE', collapsed: false},
      {name: 'Instrumentation and Methods for Astrophysics', code: 'astro-ph.IM', collapsed: false},
      {name: 'Solar and Stellar Astrophysics', code: 'astro-ph.SR', collapsed: false},
    ],
  },
  {
    type: 'Condensed Matter',
    collapsed: false,
    code: 'cond-mat',
    sub: [
      {name: 'Disordered Systems and Neural Networks', code: 'cond-mat.dis-nn', collapsed: false},
      {name: 'Mesoscale and Nanoscale Physics', code: 'cond-mat.mes-hall', collapsed: false},
      {name: 'Materials Science', code: 'cond-mat.mtrl-sci', collapsed: false},
      {name: 'Other Condensed Matter', code: 'cond-mat.other', collapsed: false},
      {name: 'Quantum Gases', code: 'cond-mat.quant-gas', collapsed: false},
      {name: 'Soft Condensed Matter', code: 'cond-mat.soft', collapsed: false},
      {name: 'Statistical Mechanics', code: 'cond-mat.stat-mech', collapsed: false},
      {name: 'Strongly Correlated Electrons', code: 'cond-mat.str-el', collapsed: false},
      {name: 'Superconductivity', code: 'cond-mat.supr-con', collapsed: false},
    ],
  },
  {
    type: 'General Relativity and Quantum Cosmology',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'HEP - Experiment',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'HEP - Lattice',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'HEP - Phenomenology',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'HEP - Theory',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'Mathematical Physics',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'Nonlinear Sciences',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'Nuclear Experiment',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'Nuclear Theoryr',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'More Physics',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'Quantum Physics',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'Mathematics',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'Computer Science',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'Quantitative Biology',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'Quantitative Finance',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'Statistics',
    collapsed: false,
    code: '',
    sub: [],
  },
  {
    type: 'Economics',
    collapsed: false,
    code: '',
    sub: [
      {name: 'Econometrics', code: 'econ.EM', collapsed: false},
    ],
  },
];

class CategoryDrawer extends React.Component {
  state = { visible: false };

  constructor(props) {
    super(props);
    this.state = { 
      subCategoryCode: '',
    };
  }

  handleClick = (e, subCategory) => {
    this.props.fetchSubCategory(subCategory);
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    let categoryType = dataSource.map(category => {
      let subCategory = category.sub.map(subCategory => {
        return (<Menu.Item onClick = {(e) => this.handleClick(e, subCategory.code)}>{subCategory.name}</Menu.Item>);
      });
      return (<SubMenu title={<span><Icon type="bars" /><span>{category.type}</span></span>}>
        {subCategory}
        </SubMenu>);
   });
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          <Icon type={this.state.visible ? 'menu-unfold' : 'menu-fold'} />
        </Button>

        <Drawer
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
        {categoryType}  
        </Menu>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { subCategoryReducer: state.subCategoryReducer }
};

const mapDispatchToProps = dispatch => ({
  fetchSubCategory: (subCategory) => dispatch(fetchSubCategory(subCategory))
 })

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDrawer);

