import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPayment } from './actions';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.items.data.map(() => '')
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValueChange(e, id) {
    let rawValue = e.target.value;
    let value = parseInt(rawValue);
    let values = this.state.values.slice();
    values[id] = rawValue;
    this.setState({
      ...this.state,
      values
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onEditSubmit(this.state.values);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {
            this.props.items.data.map((item, index) => (
              <li key={item.id}>
                <label>
                  {item.name}
                  <input name={item.id} type="text"
                   value={
                     (this.state.values[item.id] || '').toString()
                   }
                   onChange={e => this.handleValueChange(e, item.id)}
                  />
                  円
                </label>
              </li>
            ))
          }
        </ul>
        <input type="submit" value="保存" />
        <input type="button" value="戻る" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  onEditSubmit: values => {
    dispatch(editPayment({
      year: 2019,
      month: 1,
      values
    }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);

