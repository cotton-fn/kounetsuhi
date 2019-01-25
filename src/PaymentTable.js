import React from 'react';
import { connect } from 'react-redux';

const HomePage = props => { console.log(props);return(
  <table>
    <thead>
      <tr>
        <th>種別</th>
        <th>年月</th>
        <th>値段</th>
      </tr>
    </thead>
    <tbody>
    {
      props.payments.map((payment, index) => (
        <tr key={index}>
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
    </tbody>
  </table>
)};

const mapStateToProps = state => ({
  items: state.items,
  payments: state.payments
});

export default connect(
  mapStateToProps
)(HomePage);
