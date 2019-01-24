import React, { Component } from 'react';
import { connect } from 'react-redux';

const HomePage = props => { console.log(props);return(
  <table>
    {
      props.payments.map((payment, index) => (
        <tr>
          <td>
            {props.items.data[index].name}
          </td>
          <td>
            {payment.year} / {payment.month}
          </td>
          <td>
            {payment.values.map(v => <span>{v}</span>)}
          </td>
        </tr>
      ))
    }
  </table>
)};

const mapStateToProps = state => ({
  items: state.items,
  payments: state.payments
});

export default connect(
  mapStateToProps
)(HomePage);
