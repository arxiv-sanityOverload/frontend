import React from "react";
import { connect } from "react-redux";
import { action } from "../../_actions/action";

class Test extends React.Component {
  componentDidMount() {
    this.props.dispatch(action({ text: "Hurray! I got my data" }));
  }
  render() {
    const { data } = this.props.reducer;
    return (
      <div>
        Test
        <h1>{data}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { reducer: state.reducer }
};

export default connect(mapStateToProps)(Test);