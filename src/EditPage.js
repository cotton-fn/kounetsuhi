import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import EditForm from './EditForm';

const EditPage = props => {
  if (props.match.params.month === undefined) {
    let current = props.date.current;
    let year = current.getFullYear();
    let month = current.getMonth() + 1;
    return <Redirect to={`/edit/${year}/${month}`} />
  } else {
    let { year, month } = props.match.params;
    year = parseInt(year);
    month = parseInt(month);
    let prevYear = month === 1 ? year - 1 : year;
    let nextYear = month === 12 ? year + 1 : year;
    let prevMonth = month === 1 ? 12 : month - 1;
    let nextMonth = month === 12 ? 1 : month + 1;
    return (
      <div className="edit-page">
        <h2>光熱費入力</h2>
        <div>
          <Link to={`/edit/${prevYear}/${prevMonth}`}>&lt;&lt;</Link>
            {year}年 {month}月
          <Link to={`/edit/${nextYear}/${nextMonth}`}>&gt;&gt;</Link>
        </div>
        <EditForm />
      </div>
    );
  }
};

export default connect(state => ({ date: state.date }))(EditPage);
